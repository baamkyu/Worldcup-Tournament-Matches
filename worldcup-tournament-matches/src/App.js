import './App.css';
import { useState } from 'react'


function Header() {
  return <header>
    <h1><a href="/">카타르 월드컵 토너먼트 대진표</a></h1>
  </header>
}



 function TournamentRound(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  const [ pkScore, setPkScore ] = useState([-1, -1])
  const [mode, setMode] = useState('select')
  const [result, setResult] = useState('')
  const [pkResult, setPkResult] = useState('')
  const [readyToRender, setReadyToRender] = useState(false)

  let team1 = props.team1
  let team2 = props.team2
  
  if (mode === 'select') {
    if (gameScore[0] >=0 && gameScore[1] >=0 && gameScore[0] > gameScore[1]) {
      setResult('team1')
      setMode('selected')
      props.winnerSelect(team1)
    } else if (gameScore[0] >=0 && gameScore[1] >=0 && gameScore[0] < gameScore[1]) {
      setResult('team2')
      setMode('selected')
      props.winnerSelect(team2)
    } else if (result !== 'draw' && gameScore[0] >=0 && gameScore[1] >=0 && gameScore[0] === gameScore[1]) {
      setResult('draw')
    }

    if (pkScore[0] >= 0 && pkScore[1] >= 0 && pkScore[0] > pkScore[1]) {
      setPkResult('team1')
      setMode('selected')
      props.winnerSelect(team1)
    } else if (pkScore[0] >= 0 && pkScore[1] >= 0 && pkScore[0] < pkScore[1]) {
      setPkResult('team2')
      setMode('selected')
      props.winnerSelect(team2)
    }
  } else if (mode === 'selected') {
  }

  const modeChange = () => {
    setMode('select')
    setGameScore([-1, -1])
    setPkScore([-1, -1])
    setResult('')
    setPkResult('')
    if (props.round === '4') {
      props.winnerSelect(`결승 ${props.id+1}팀`)
    } else {props.winnerSelect(`${props.round/2}강 ${props.id+1}팀`)}
  }

  if (readyToRender === false) {
    if (props.round === '16') {
      setReadyToRender(true)
    } else if (team1[1] !== '강' && team2[1] !== '강') {
      setReadyToRender(true)
    }
  } else {
    if (team1[1] === '강' || team2[1] === '강') {
      setReadyToRender(false)
      setMode('select')
      setGameScore([-1, -1])
      setPkScore([-1, -1])
      setResult('')
      setPkResult('')
      if (props.round === '4') {
        props.winnerSelect(`결승 ${props.id+1}팀`)
      } else {props.winnerSelect(`${props.round/2}강 ${props.id+1}팀`)}
    }
  }

  //
  return (
    <>
    <div>{team1} VS {team2}</div>
    
    {mode === 'select' && readyToRender === true && <>
    {/* Team1 경기 스코어 */}
   <select onChange={ event => {
     event.preventDefault();
     setGameScore(gameScore => {
       let newGameScore = [...gameScore]
       newGameScore[0] = parseInt(event.target.value)
       return newGameScore
     })
   }}>
   <option value="" hidden="" disabled="disabled" selected="selected">...</option>
   <option value="0">0</option>
   <option value="1">1</option>
   <option value="2">2</option>
   <option value="3">3</option>
   <option value="4">4</option>
   <option value="5">5</option>
   <option value="6">6</option>
   <option value="7">7</option>
   <option value="8">8</option>
 </select>

   {/* Team2 경기 스코어 */}
   <select onChange={ event => {
     event.preventDefault();
     setGameScore(gameScore => {
       let newGameScore = [...gameScore]
       newGameScore[1] = parseInt(event.target.value)
       return newGameScore
     })
   }}>
   <option value="" hidden="" disabled="disabled" selected="selected">...</option>
   <option value="0">0</option>
   <option value="1">1</option>
   <option value="2">2</option>
   <option value="3">3</option>
   <option value="4">4</option>
   <option value="5">5</option>
   <option value="6">6</option>
   <option value="7">7</option>
   <option value="8">8</option>
 </select>
 </>}
 { mode === 'select' && result === 'draw' &&
  <div>
    <div>승부차기</div>
   {/* Team1 PK 스코어 */}
    <select onChange={ event => {
        event.preventDefault();
        setPkScore(pkScore => {
          let newPkScore = [...pkScore]
          newPkScore[0] = parseInt(event.target.value)
          return newPkScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected="selected">...</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>

      {/* Team2 PK 스코어 */}
      <select onChange={ event => {
        event.preventDefault();
        setPkScore(pkScore => {
          let newPkScore = [...pkScore]
          newPkScore[1] = parseInt(event.target.value)
          return newPkScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected="selected">...</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
  </div> }
  { mode === 'selected' && <>
    <span>점수 {gameScore[0]} : {gameScore[1]}</span>
    { (pkResult !== '') && <div>승부차기 {pkScore[0]} : {pkScore[1]}</div> }
    { (result === 'team1' || pkResult === 'team1') && props.round === '16' && <div>{team1} 8강 진출</div> }
    { (result === 'team2' || pkResult === 'team2') && props.round === '16' &&<div>{team2} 8강 진출</div> }

    { (result === 'team1' || pkResult === 'team1') && props.round === '8' && <div>{team1} 4강 진출</div> }
    { (result === 'team2' || pkResult === 'team2') && props.round === '8' &&<div>{team2} 4강 진출</div> }  
    
    { (result === 'team1' || pkResult === 'team1') && props.round === '4' && <div>{team1} 결승 진출!!</div> }
    { (result === 'team2' || pkResult === 'team2') && props.round === '4' &&<div>{team2} 결승 진출!!</div> }  
    <button onClick={modeChange}>점수 재설정</button>
    </>}
  {readyToRender === false && <>진출팀을 결정해주세요.</>}
  <p></p>
 </>
  )
 }

 function FinalRound(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  const [ pkScore, setPkScore ] = useState([-1, -1])
  const [mode, setMode] = useState('select')
  const [result, setResult] = useState('')
  const [pkResult, setPkResult] = useState('')
  const [readyToRender, setReadyToRender] = useState(false)

  let team1 = props.team1
  let team2 = props.team2
  
  if (mode === 'select') {
    if (gameScore[0] >=0 && gameScore[1] >=0 && gameScore[0] > gameScore[1]) {
      setResult('team1')
      setMode('selected')
    } else if (gameScore[0] >=0 && gameScore[1] >=0 && gameScore[0] < gameScore[1]) {
      setResult('team2')
      setMode('selected')
    } else if ( result !== 'draw' && gameScore[0] >=0 && gameScore[1] >=0 && gameScore[0] === gameScore[1]) {
      setResult('draw')
    }

    if (pkScore[0] >= 0 && pkScore[1] >= 0 && pkScore[0] > pkScore[1]) {
      setPkResult('team1')
      setMode('selected')
    } else if (pkScore[0] >= 0 && pkScore[1] >= 0 && pkScore[0] < pkScore[1]) {
      setPkResult('team2')
      setMode('selected')
    }
  } else if (mode === 'selected') {
  }

  const modeChange = () => {
    setMode('select')
    setGameScore([-1, -1])
    setPkScore([-1, -1])
    setResult('')
    setPkResult('')
  }

  if (readyToRender === false) {
    if (team1[1] !== '승' && team2[1] !== '승') {
      setReadyToRender(true)
    }
  } else {
    if (team1[1] === '승' || team2[1] === '승') {
      setReadyToRender(false)
      setMode('select')
      setGameScore([-1, -1])
      setPkScore([-1, -1])
      setResult('')
      setPkResult('')
    }
  }

  return (
    <>
    <div>{team1} VS {team2}</div>
    
    {mode === 'select' && readyToRender === true && <>
    {/* Team1 경기 스코어 */}
   <select onChange={ event => {
     event.preventDefault();
     setGameScore(gameScore => {
       let newGameScore = [...gameScore]
       newGameScore[0] = parseInt(event.target.value)
       return newGameScore
     })
   }}>
   <option value="" hidden="" disabled="disabled" selected="selected">...</option>
   <option value="0">0</option>
   <option value="1">1</option>
   <option value="2">2</option>
   <option value="3">3</option>
   <option value="4">4</option>
   <option value="5">5</option>
   <option value="6">6</option>
   <option value="7">7</option>
   <option value="8">8</option>
 </select>

   {/* Team2 경기 스코어 */}
   <select onChange={ event => {
     event.preventDefault();
     setGameScore(gameScore => {
       let newGameScore = [...gameScore]
       newGameScore[1] = parseInt(event.target.value)
       return newGameScore
     })
   }}>
   <option value="" hidden="" disabled="disabled" selected="selected">...</option>
   <option value="0">0</option>
   <option value="1">1</option>
   <option value="2">2</option>
   <option value="3">3</option>
   <option value="4">4</option>
   <option value="5">5</option>
   <option value="6">6</option>
   <option value="7">7</option>
   <option value="8">8</option>
 </select>
 </>}
 { mode === 'select' && result === 'draw' &&
  <div>
    <div>승부차기</div>
   {/* Team1 PK 스코어 */}
    <select onChange={ event => {
        event.preventDefault();
        setPkScore(pkScore => {
          let newPkScore = [...pkScore]
          newPkScore[0] = parseInt(event.target.value)
          return newPkScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected="selected">...</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>

      {/* Team2 PK 스코어 */}
      <select onChange={ event => {
        event.preventDefault();
        setPkScore(pkScore => {
          let newPkScore = [...pkScore]
          newPkScore[1] = parseInt(event.target.value)
          return newPkScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected="selected">...</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
    </select>
  </div> }
  { mode === 'selected' && <>
    <span>점수 {gameScore[0]} : {gameScore[1]}</span>
    { (pkResult !== '') && <div>승부차기 {pkScore[0]} : {pkScore[1]}</div> }
    { (result === 'team1' || pkResult === 'team1')  && <div>{team1} 우승!!</div> }
    { (result === 'team2' || pkResult === 'team2')  && <div>{team2} 우승!!</div> }  
    <button onClick={modeChange}>점수 재설정</button>
    </>}
  {readyToRender === false && <>진출팀을 결정해주세요.</>}
  <p></p>
 </>
  )
 }


function Article() {
  return <article>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    made by baamkyu
  </article>
}



function App() {
  const Teams16 = ['네덜란드', '미국', '아르헨티나', '호주', '일본', '크로아티아', '브라질', '대한민국', '잉글랜드', '세네갈', '프랑스', '폴란드', '모로코', '스페인', '포르투갈', '스위스']

  const Round16Team1 = []
  const Round16Team2 = []

  const Round8Team1 = []
  const Round8Team2 = []

  const Round4Team1 = []
  const Round4Team2 = []

  // const Round2Team1 = []
  // const Round2Team2 = []


  
  const [ Teams8, SetTeams8 ] = useState(['8강 1팀','8강 2팀','8강 3팀','8강 4팀','8강 5팀','8강 6팀','8강 7팀','8강 8팀'])
  const [ Teams4, SetTeams4 ] = useState(['4강 1팀', '4강 2팀', '4강 3팀', '4강 4팀'])
  const [ Teams2, SetTeams2 ] = useState(['결승 1팀', '결승 2팀'])
  // const [ Teams1, SetTeams1 ] = useState(['1강'])


  for (let i=0; i<8; i++) {
    Round16Team1.push(Teams16[i*2])
    Round16Team2.push(Teams16[i*2+1])
  }

  const Round16 = []
    for (let i=0; i<8; i++) {
      Round16.push(
      <TournamentRound 
        key={i} 
        id={i}
        team1={Round16Team1[i]} 
        team2={Round16Team2[i]}
        round='16'
        winnerSelect={(winner) =>
          {
            const newTeams8 = [...Teams8]
            newTeams8[i]=winner
            SetTeams8(newTeams8)}
        }></TournamentRound>
      )
    }


    for (let i=0; i<4; i++) {
      Round8Team1.push(Teams8[i*2])
      Round8Team2.push(Teams8[i*2+1])
    }


    const Round8 = []
    for (let i=0; i<4; i++) {
      Round8.push(
        <TournamentRound 
        key={i}
        id={i}
        team1={Round8Team1[i]} 
        team2={Round8Team2[i]}
        round='8'
        winnerSelect={(winner) =>
          {
            const newTeams4 = [...Teams4]
            newTeams4[i]=winner
            SetTeams4(newTeams4)}
        }></TournamentRound>
      )
    }


    for (let i=0; i<2; i++) {
      Round4Team1.push(Teams4[i*2])
      Round4Team2.push(Teams4[i*2+1])
    }

    const Round4 = []
    for (let i=0; i<2; i++) {
      Round4.push(
        <TournamentRound 
        key={i}
        id={i}
        team1={Round4Team1[i]} 
        team2={Round4Team2[i]}
        round='4'
        winnerSelect={(winner) =>
          {
            const newTeams2 = [...Teams2]
            newTeams2[i]=winner
            SetTeams2(newTeams2)}
        }></TournamentRound>
      )
    }

    
    return (
    <div>
      <Header></Header>
      <h3>16강</h3>
      {Round16} {/* 16강 대진표 */}
      <br></br>

      <h3>8강</h3>
      {Round8}
      <br></br>

      <h3>4강</h3>
      {Round4}
      <br></br>

      <h3>결승</h3>
      <FinalRound team1={Teams2[0]} team2={Teams2[1]}></FinalRound>
      <Article></Article>
    </div>
  );
}


export default App;