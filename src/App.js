import './App.css';
import { useState } from 'react'
import 네덜란드 from './images/네덜란드.png'
import 미국 from './images/미국.png'
import 아르헨티나 from './images/아르헨티나.png'
import 호주 from './images/호주.png'
import 일본 from './images/일본.png'
import 크로아티아 from './images/크로아티아.png'
import 브라질 from './images/브라질.png'
import 대한민국 from './images/대한민국.png'
import 잉글랜드 from './images/잉글랜드.png'
import 세네갈 from './images/세네갈.png'
import 프랑스 from './images/프랑스.png'
import 폴란드 from './images/폴란드.png'
import 모로코 from './images/모로코.png'
import 스페인 from './images/스페인.png'
import 포르투갈 from './images/포르투갈.png'
import 스위스 from './images/스위스.png'
import 물음표 from './images/물음표.png'
import ball from './images/ball.png'
import logo from './images/logo.png'
import styles from './App.module.css'
import githubicon from './images/githubicon.png'

import Icon from 'react-material-symbols/rounded';


function Header() {
  return <header>
    <div className={styles.pagetitle}>
      <span className={styles.titletext}><img src={logo} alt='' className={styles.logo}></img>카타르 월드컵 토너먼트 시뮬레이션</span>
    </div>
  </header>
}

function UpToScroll() {
  const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
  const MoveToBottom = () => {
    window.scrollTo({ top: 1000000, behavior: 'smooth'})
  }
  return (
    <div className={styles.arrowiconposition}>
      <div>
        <Icon className={styles.arrowicon} icon="arrow_drop_up" onClick={MoveToTop}></Icon>
      </div>
      <div>
        <Icon className={styles.arrowicon} icon="arrow_drop_down" onClick={MoveToBottom}></Icon>
      </div>
    </div>
  )
}



 function TournamentRound(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  const [ pkScore, setPkScore ] = useState([-1, -1])
  const [ mode, setMode ] = useState('select')
  const [ result, setResult ] = useState('')
  const [ pkResult, setPkResult ] = useState('')
  const [ readyToRender, setReadyToRender ] = useState(false)

  let team1 = props.team1
  let team2 = props.team2
  let nationalFlagTeam1 = ''
  let nationalFlagTeam2 = ''
  const noneselectimg = 물음표

  if (team1 === '네덜란드'){
    nationalFlagTeam1 = 네덜란드
  } else if (team1 === '미국'){
    nationalFlagTeam1 = 미국
  } else if (team1 === '아르헨티나'){
    nationalFlagTeam1 = 아르헨티나
  } else if (team1 === '호주'){
    nationalFlagTeam1 = 호주
  } else if (team1 === '일본'){
    nationalFlagTeam1 = 일본
  } else if (team1 === '크로아티아'){
    nationalFlagTeam1 = 크로아티아
  } else if (team1 === '브라질'){
    nationalFlagTeam1 = 브라질
  } else if (team1 === '대한민국'){
    nationalFlagTeam1 = 대한민국
  } else if (team1 === '잉글랜드'){
    nationalFlagTeam1 = 잉글랜드
  } else if (team1 === '세네갈'){
    nationalFlagTeam1 = 세네갈
  } else if (team1 === '프랑스'){
    nationalFlagTeam1 = 프랑스
  } else if (team1 === '폴란드'){
    nationalFlagTeam1 = 폴란드
  } else if (team1 === '모로코'){
    nationalFlagTeam1 = 모로코
  } else if (team1 === '스페인'){
    nationalFlagTeam1 = 스페인
  } else if (team1 === '포르투갈'){
    nationalFlagTeam1 = 포르투갈
  } else if (team1 === '스위스'){
    nationalFlagTeam1 = 스위스
  }

  if (team2 === '네덜란드'){
    nationalFlagTeam2 = 네덜란드
  } else if (team2 === '미국'){
    nationalFlagTeam2 = 미국
  } else if (team2 === '아르헨티나'){
    nationalFlagTeam2 = 아르헨티나
  } else if (team2 === '호주'){
    nationalFlagTeam2 = 호주
  } else if (team2 === '일본'){
    nationalFlagTeam2 = 일본
  } else if (team2 === '크로아티아'){
    nationalFlagTeam2 = 크로아티아
  } else if (team2 === '브라질'){
    nationalFlagTeam2 = 브라질
  } else if (team2 === '대한민국'){
    nationalFlagTeam2 = 대한민국
  } else if (team2 === '잉글랜드'){
    nationalFlagTeam2 = 잉글랜드
  } else if (team2 === '세네갈'){
    nationalFlagTeam2 = 세네갈
  } else if (team2 === '프랑스'){
    nationalFlagTeam2 = 프랑스
  } else if (team2 === '폴란드'){
    nationalFlagTeam2 = 폴란드
  } else if (team2 === '모로코'){
    nationalFlagTeam2 = 모로코
  } else if (team2 === '스페인'){
    nationalFlagTeam2 = 스페인
  } else if (team2 === '포르투갈'){
    nationalFlagTeam2 = 포르투갈
  } else if (team2 === '스위스'){
    nationalFlagTeam2 = 스위스
  }

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


  return (
    <>
    <div className={styles.gamebackground}>
    <div className={styles.eachgame}>
        {/* 팀1, 팀2 모두 선택 됐을 때 */}
        {readyToRender === true &&<>
          <img src={nationalFlagTeam1} alt='' className={styles.nationflag}></img><span className={styles.versustitle}>{team1} VS {team2}</span>  
          <img src={nationalFlagTeam2} alt='' className={styles.nationflag}></img></>}
          
        {readyToRender === false && team1[1] === '강' && team2[1] === '강' && <>
          <img src={noneselectimg} alt='' className={styles.nationflag}></img><span className={styles.versustitle}>{team1} VS {team2}</span> 
          <img src={noneselectimg} alt='' className={styles.nationflag}></img></>}

        {readyToRender === false && team1[1] !== '강' && team2[1] === '강' && <>
          <img src={nationalFlagTeam1} alt='' className={styles.nationflag}></img><span className={styles.versustitle}>{team1} VS {team2}</span> 
          <img src={noneselectimg} alt='' className={styles.nationflag}></img></>}

        {readyToRender === false && team1[1] === '강' && team2[1] !== '강' && <>
          <img src={noneselectimg} alt='' className={styles.nationflag}></img><span className={styles.versustitle}>{team1} VS {team2}</span> 
          <img src={nationalFlagTeam2} alt='' className={styles.nationflag}></img></>}
      </div>
    
    
    {mode === 'select' && readyToRender === true && <>
    {/* Team1 경기 스코어 */}
    <div>
      <br></br>
    <select className={styles.selectbox} onChange={ event => {
      event.preventDefault();
      setGameScore(gameScore => {
        let newGameScore = [...gameScore]
        newGameScore[0] = parseInt(event.target.value)
        return newGameScore
      })
    }}>
    <option value="" hidden="" disabled="disabled" selected>...</option>
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
   <select className={styles.selectbox} onChange={ event => {
     event.preventDefault();
     setGameScore(gameScore => {
       let newGameScore = [...gameScore]
       newGameScore[1] = parseInt(event.target.value)
       return newGameScore
     })
   }}>
   <option value="" hidden="" disabled="disabled" selected>...</option>
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
 </div>
 </>}
 { mode === 'select' && result === 'draw' &&
  <div>
    <br></br>
    <div>승부차기</div>
   {/* Team1 PK 스코어 */}
   <div>
    <select className={styles.selectbox} onChange={ event => {
        event.preventDefault();
        setPkScore(pkScore => {
          let newPkScore = [...pkScore]
          newPkScore[0] = parseInt(event.target.value)
          return newPkScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected>...</option>
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
      <select className={styles.selectbox} onChange={ event => {
        event.preventDefault();
        setPkScore(pkScore => {
          let newPkScore = [...pkScore]
          newPkScore[1] = parseInt(event.target.value)
          return newPkScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected>...</option>
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
    </div>
  </div> 
  }
  { mode === 'selected' && <>
    <span>점수 {gameScore[0]} : {gameScore[1]}</span>
    { (pkResult !== '') && <div>승부차기 {pkScore[0]} : {pkScore[1]}</div> }
    { (result === 'team1' || pkResult === 'team1') && props.round === '16' && <div>{team1} 8강 진출</div> }
    { (result === 'team2' || pkResult === 'team2') && props.round === '16' &&<div>{team2} 8강 진출</div> }

    { (result === 'team1' || pkResult === 'team1') && props.round === '8' && <div>{team1} 4강 진출</div> }
    { (result === 'team2' || pkResult === 'team2') && props.round === '8' &&<div>{team2} 4강 진출</div> }  
    
    { (result === 'team1' || pkResult === 'team1') && props.round === '4' && <div>{team1} 결승 진출!!</div> }
    { (result === 'team2' || pkResult === 'team2') && props.round === '4' &&<div>{team2} 결승 진출!!</div> }
    <br></br>
    <button onClick={modeChange} className={styles.resetbutton}>점수 재설정</button>
    </>}
  { readyToRender === false && <>진출팀을 결정해주세요.</>}
  </div>
 </>
  )
 }



 function FinalRound(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  const [ pkScore, setPkScore ] = useState([-1, -1])
  const [mode, setMode] = useState('select')
  const [result, setResult] = useState('')
  const [pkResult, setPkResult] = useState('')
  const [ readyToRender, setReadyToRender ] = useState(false)

  let team1 = props.team1
  let team2 = props.team2  
  let nationalFlagTeam1 = ''
  let nationalFlagTeam2 = ''
  const noneselectimg = 물음표

  if (team1 === '네덜란드'){
    nationalFlagTeam1 = 네덜란드
  } else if (team1 === '미국'){
    nationalFlagTeam1 = 미국
  } else if (team1 === '아르헨티나'){
    nationalFlagTeam1 = 아르헨티나
  } else if (team1 === '호주'){
    nationalFlagTeam1 = 호주
  } else if (team1 === '일본'){
    nationalFlagTeam1 = 일본
  } else if (team1 === '크로아티아'){
    nationalFlagTeam1 = 크로아티아
  } else if (team1 === '브라질'){
    nationalFlagTeam1 = 브라질
  } else if (team1 === '대한민국'){
    nationalFlagTeam1 = 대한민국
  } else if (team1 === '잉글랜드'){
    nationalFlagTeam1 = 잉글랜드
  } else if (team1 === '세네갈'){
    nationalFlagTeam1 = 세네갈
  } else if (team1 === '프랑스'){
    nationalFlagTeam1 = 프랑스
  } else if (team1 === '폴란드'){
    nationalFlagTeam1 = 폴란드
  } else if (team1 === '모로코'){
    nationalFlagTeam1 = 모로코
  } else if (team1 === '스페인'){
    nationalFlagTeam1 = 스페인
  } else if (team1 === '포르투갈'){
    nationalFlagTeam1 = 포르투갈
  } else if (team1 === '스위스'){
    nationalFlagTeam1 = 스위스
  }

  if (team2 === '네덜란드'){
    nationalFlagTeam2 = 네덜란드
  } else if (team2 === '미국'){
    nationalFlagTeam2 = 미국
  } else if (team2 === '아르헨티나'){
    nationalFlagTeam2 = 아르헨티나
  } else if (team2 === '호주'){
    nationalFlagTeam2 = 호주
  } else if (team2 === '일본'){
    nationalFlagTeam2 = 일본
  } else if (team2 === '크로아티아'){
    nationalFlagTeam2 = 크로아티아
  } else if (team2 === '브라질'){
    nationalFlagTeam2 = 브라질
  } else if (team2 === '대한민국'){
    nationalFlagTeam2 = 대한민국
  } else if (team2 === '잉글랜드'){
    nationalFlagTeam2 = 잉글랜드
  } else if (team2 === '세네갈'){
    nationalFlagTeam2 = 세네갈
  } else if (team2 === '프랑스'){
    nationalFlagTeam2 = 프랑스
  } else if (team2 === '폴란드'){
    nationalFlagTeam2 = 폴란드
  } else if (team2 === '모로코'){
    nationalFlagTeam2 = 모로코
  } else if (team2 === '스페인'){
    nationalFlagTeam2 = 스페인
  } else if (team2 === '포르투갈'){
    nationalFlagTeam2 = 포르투갈
  } else if (team2 === '스위스'){
    nationalFlagTeam2 = 스위스
  }
  

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
    <div className={styles.gamebackground}>
    <div className={styles.eachgame}>
        {/* 팀1, 팀2 모두 선택 됐을 때 */}
        {readyToRender === true &&<>
          <img src={nationalFlagTeam1} alt='' className={styles.nationflag}></img><span className={styles.versustitle}>{team1} VS {team2}</span>  
          <img src={nationalFlagTeam2} alt='' className={styles.nationflag}></img></>}
          
        {readyToRender === false && team1[1] === '승' && team2[1] === '승' && <>
          <img src={noneselectimg} alt='' className={styles.nationflag}></img><span className={styles.versustitle}>{team1} VS {team2}</span> 
          <img src={noneselectimg} alt='' className={styles.nationflag}></img></>}

        {readyToRender === false && team1[1] !== '승' && team2[1] === '승' && <>
          <img src={nationalFlagTeam1} alt='' className={styles.nationflag}></img><span className={styles.versustitle}>{team1} VS {team2}</span> 
          <img src={noneselectimg} alt='' className={styles.nationflag}></img></>}

        {readyToRender === false && team1[1] === '승' && team2[1] !== '승' && <>
          <img src={noneselectimg} alt='' className={styles.nationflag}></img><span className={styles.versustitle}>{team1} VS {team2}</span> 
          <img src={nationalFlagTeam2} alt='' className={styles.nationflag}></img></>}
      </div>
      
    
    {mode === 'select' && readyToRender === true && <>
    {/* Team1 경기 스코어 */}
    <div className={styles.eachgame}>
      <select className={styles.selectbox} onChange={ event => {
        event.preventDefault();
        setGameScore(gameScore => {
          let newGameScore = [...gameScore]
          newGameScore[0] = parseInt(event.target.value)
          return newGameScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected>...</option>
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
      <select className={styles.selectbox} onChange={ event => {
        event.preventDefault();
        setGameScore(gameScore => {
          let newGameScore = [...gameScore]
          newGameScore[1] = parseInt(event.target.value)
          return newGameScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected>...</option>
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
  </div>
 </>}
 { mode === 'select' && result === 'draw' &&
  <div>
    <div>승부차기</div>
   {/* Team1 PK 스코어 */}
   <div>
    <select className={styles.selectbox} onChange={ event => {
        event.preventDefault();
        setPkScore(pkScore => {
          let newPkScore = [...pkScore]
          newPkScore[0] = parseInt(event.target.value)
          return newPkScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected>...</option>
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
      <select className={styles.selectbox} onChange={ event => {
        event.preventDefault();
        setPkScore(pkScore => {
          let newPkScore = [...pkScore]
          newPkScore[1] = parseInt(event.target.value)
          return newPkScore
        })
      }}>
      <option value="" hidden="" disabled="disabled" selected>...</option>
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
    </div>
  </div> }
  { mode === 'selected' && <>
    <span>점수 {gameScore[0]} : {gameScore[1]}</span>
    { (pkResult !== '') && <div>승부차기 {pkScore[0]} : {pkScore[1]}</div> }
    { (result === 'team1' || pkResult === 'team1')  && <div>{team1} 우승!!</div> }
    { (result === 'team2' || pkResult === 'team2')  && <div>{team2} 우승!!</div> }  
    <br></br>
    <button onClick={modeChange} className={styles.resetbutton}>점수 재설정</button>
    </>}
  { readyToRender === false && <>진출팀을 결정해주세요.</> }
  </div>
 </>
  )
 }


function Article() {
  return <article>
    <br></br>
    <a href="https://github.com/baamkyu/Worldcup-Tournament-Matches">
      <img src={githubicon} alt='' className={styles.githubicon}></img>
    </a>
    <br></br>
    made by baamkyu
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </article>
}



function App() {
  // 16강 진출국들
  const Teams16 = ['네덜란드', '미국', '아르헨티나', '호주', '일본', '크로아티아', '브라질', '대한민국', '잉글랜드', '세네갈', '프랑스', '폴란드', '모로코', '스페인', '포르투갈', '스위스']
  // 16강 대진표 (Team1 vs Team2)
  const Round16Team1 = []
  const Round16Team2 = []
  // 8강 대진표 (Team1 vs Team2)
  const Round8Team1 = []
  const Round8Team2 = [] 
  // 4강 대진표 (Team1 vs Team2)
  const Round4Team1 = []
  const Round4Team2 = []

  // 해당 라운드에서 승리한 팀은 다음 라운드 진출팀에 대입
  const [ Teams8, SetTeams8 ] = useState(['8강 1팀','8강 2팀','8강 3팀','8강 4팀','8강 5팀','8강 6팀','8강 7팀','8강 8팀'])
  const [ Teams4, SetTeams4 ] = useState(['4강 1팀', '4강 2팀', '4강 3팀', '4강 4팀'])
  const [ Teams2, SetTeams2 ] = useState(['결승 1팀', '결승 2팀'])
  

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
    <div className={styles.all}>
      <Header></Header>
      <br></br>
      {/* 16강 Header */}
      <div>
        <span className={styles.roundtitle}><img src={ball} alt='' className={styles.ballicon}></img> 16강 <img src={ball} alt='' className={styles.ballicon}></img></span>
      </div>
      <br></br>
      {/* 16강 대진표 */}
      <div className={styles.round16}>
        {Round16}
      </div>
      <br></br>

      {/* 8강 Header */}
      <div>
        <span className={styles.roundtitle}><img src={ball} alt='' className={styles.ballicon}></img> 8강 <img src={ball} alt='' className={styles.ballicon}></img></span>
      </div>
      <br></br>
       {/* 8강 대진표 */}
      <div className={styles.round8}>
        {Round8}
      </div>

      {/* 4강 Header */}
      <div>
        <span className={styles.roundtitle}><img src={ball} alt='' className={styles.ballicon}></img> 4강 <img src={ball} alt='' className={styles.ballicon}></img></span>
      </div>
      <br></br>
      {/* 4강 대진표 */}
      <div className={styles.round4}> 
        {Round4}
      </div>

      {/* 결승 Header */}
      <div>
        <span className={styles.roundtitle}><img src={ball} alt='' className={styles.ballicon}></img> 결승 <img src={ball} alt='' className={styles.ballicon}></img></span>
      </div>
      <br></br>
      {/* 결승 대진표 */}
      <div className={styles.finalround}>
        <FinalRound team1={Teams2[0]} team2={Teams2[1]}></FinalRound>
      </div>
      <Article></Article>
      <UpToScroll></UpToScroll>
    </div>
  );
}


export default App;