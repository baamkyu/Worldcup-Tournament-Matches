function Round16Game8(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  const [ pkScore, setPkScore ] = useState([-1, -1])
  let team1 = props.team1
  let team2 = props.team2
  
  // 아직 선택 안 한 경우
  if (gameScore[0] < 0 || gameScore[1] < 0) {
   return (
    <>
   <p>{team1} {team2}</p>
    {/* Team1 경기 스코어 */}
   <select onChange={ event => {
     event.preventDefault();
     setGameScore(gameScore => {
       let newGameScore = [...gameScore]
       newGameScore[0] = parseInt(event.target.value)
       console.log(newGameScore)
       return newGameScore
     })
   }}>
   <option value="">...</option>
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
       console.log(newGameScore)
       return newGameScore
     })
   }}>
   <option value="">...</option>
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
 </>
   )
  // 두 팀 점수를 모두 선택했고, team1이 승리한 경우
  } else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] > gameScore[1]) {
    return (
    <>
    <p>{team1} VS {team2}</p>
    {/* 왼쪽 팀 스코어 */}
    <select onChange={ event => {
      event.preventDefault();
      setGameScore(gameScore => {
        let newGameScore = [...gameScore]
        newGameScore[0] = parseInt(event.target.value)
        console.log(newGameScore)
        return newGameScore
      })
    }}>
    <option value="">...</option>
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

    {/* 오른쪽 팀 스코어 */}
    <select onChange={ event => {
      event.preventDefault();
      setGameScore(gameScore => {
        let newGameScore = [...gameScore]
        newGameScore[1] = parseInt(event.target.value)
        console.log(newGameScore)
        return newGameScore
      })
    }}>
    <option value="">...</option>
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
  {team1} 8강 진출!
  </>
  ) // 두 팀 점수를 모두 선택했고, team2가 승리한 경우
  } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] < gameScore[1]) {
    return (
    <>
    <p>{team1} VS {team2}</p>
    {/* 왼쪽 팀 스코어 */}
    <select onChange={ event => {
      event.preventDefault();
      setGameScore(gameScore => {
        let newGameScore = [...gameScore]
        newGameScore[0] = parseInt(event.target.value)
        console.log(newGameScore)
        return newGameScore
      })
    }}>
    <option value="">...</option>
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

    {/* 오른쪽 팀 스코어 */}
    <select onChange={ event => {
      event.preventDefault();
      setGameScore(gameScore => {
        let newGameScore = [...gameScore]
        newGameScore[1] = parseInt(event.target.value)
        console.log(newGameScore)
        return newGameScore
      })
    }}>
    <option value="">...</option>
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
  {team2} 8강 진출!
  </>
  ) // 두 팀 점수를 모두 선택했고, 비긴 경우 승부차기로 !
} else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1]) {
  return (
    <>
    <p>{team1} VS {team2}</p>
    {/* Team1 경기 스코어 */}
    <select onChange={ event => {
      event.preventDefault();
      setGameScore(gameScore => {
        let newGameScore = [...gameScore]
        newGameScore[0] = parseInt(event.target.value)
        console.log(newGameScore)
        return newGameScore
      })
    }}>
    <option value="">...</option>
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
        console.log(newGameScore)
        return newGameScore
      })
    }}>
    <option value="">...</option>
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
  <span>승부차기</span>
    {/* Team1 PK 스코어 */}
    <select onChange={ event => {
      event.preventDefault();
      setPkScore(pkScore => {
        let newPkScore = [...pkScore]
        newPkScore[0] = parseInt(event.target.value)
        console.log(newPkScore)
        return newPkScore
      })
    }}>
    <option value="">...</option>
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
        console.log(newPkScore)
        return newPkScore
      })
    }}>
    <option value="">...</option>
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
  </>
  )
  // 승부차기에서 team1이 이기는 경우
} else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1] && pkScore[0] > pkScore[1]) {
  return (
    <>
    <p>{team1} VS {team2}</p>
    {/* Team1 PK 스코어 */}
    <select onChange={ event => {
      event.preventDefault();
      setPkScore(pkScore => {
        let newPkScore = [...pkScore]
        newPkScore[0] = parseInt(event.target.value)
        console.log(newPkScore)
        return newPkScore
      })
    }}>
    <option value="">...</option>
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
        console.log(newPkScore)
        return newPkScore
      })
    }}>
    <option value="">...</option>
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
  </>
  )
  // 승부차기에서 team2가 이기는 경우
} else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1] && pkScore[0] < pkScore[1]) {
  return (
    <>
    <p>{team1} VS {team2}</p>
    {/* Team1 PK 스코어 */}
    <select onChange={ event => {
      event.preventDefault();
      setPkScore(pkScore => {
        let newPkScore = [...pkScore]
        newPkScore[0] = parseInt(event.target.value)
        console.log(newPkScore)
        return newPkScore
      })
    }}>
    <option value="">...</option>
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
        console.log(newPkScore)
        return newPkScore
      })
    }}>
    <option value="">...</option>
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
  {team2} 8강 진출!
  </>
  )
  }
}