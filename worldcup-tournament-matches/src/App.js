import './App.css';
import { useState } from 'react'


function Header() {
  return <header>
    <h1><a href="/">카타르 월드컵 토너먼트 대진표</a></h1>
  </header>
}

function Round16Header() {
  return <h3>16강</h3>
}

function Round16Game1(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  let team1 = props.team1
  let team2 = props.team2
  
  if (gameScore[0] < 0 || gameScore[1] < 0) {
    return (
     <>
    <p>{team1} {team2}</p>
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
  </>
    )
   //  team2가 승리할 경우
   } else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] < gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team2}
   </>
   )
   } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] > gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team1}
   </>
   )
 } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1]) {
   return (
     <>
     <p>{team1} {team2}</p>
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
   <span>승부차기</span>
   </>
   )
 }
 }

function Round16Game2(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  let team1 = props.team1
  let team2 = props.team2
  
  if (gameScore[0] < 0 || gameScore[1] < 0) {
    return (
     <>
    <p>{team1} {team2}</p>
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
  </>
    )
   //  team2가 승리할 경우
   } else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] < gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team2}
   </>
   )
   } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] > gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team1}
   </>
   )
 } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1]) {
   return (
     <>
     <p>{team1} {team2}</p>
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
   <span>승부차기</span>
   </>
   )
 }
 }

function Round16Game3(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  let team1 = props.team1
  let team2 = props.team2
  
  if (gameScore[0] < 0 || gameScore[1] < 0) {
    return (
     <>
    <p>{team1} {team2}</p>
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
  </>
    )
   //  team2가 승리할 경우
   } else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] < gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team2}
   </>
   )
   } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] > gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team1}
   </>
   )
 } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1]) {
   return (
     <>
     <p>{team1} {team2}</p>
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
   <span>승부차기</span>
   </>
   )
 }
 }

function Round16Game4(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  let team1 = props.team1
  let team2 = props.team2
  
  if (gameScore[0] < 0 || gameScore[1] < 0) {
    return (
     <>
    <p>{team1} {team2}</p>
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
  </>
    )
   //  team2가 승리할 경우
   } else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] < gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team2}
   </>
   )
   } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] > gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team1}
   </>
   )
 } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1]) {
   return (
     <>
     <p>{team1} {team2}</p>
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
   <span>승부차기</span>
   </>
   )
 }
 }

function Round16Game5(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  let team1 = props.team1
  let team2 = props.team2
  
  if (gameScore[0] < 0 || gameScore[1] < 0) {
    return (
     <>
    <p>{team1} {team2}</p>
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
  </>
    )
   //  team2가 승리할 경우
   } else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] < gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team2}
   </>
   )
   } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] > gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team1}
   </>
   )
 } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1]) {
   return (
     <>
     <p>{team1} {team2}</p>
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
   <span>승부차기</span>
   </>
   )
 }
 }

function Round16Game6(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  let team1 = props.team1
  let team2 = props.team2
  
  if (gameScore[0] < 0 || gameScore[1] < 0) {
    return (
     <>
    <p>{team1} {team2}</p>
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
  </>
    )
   //  team2가 승리할 경우
   } else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] < gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team2}
   </>
   )
   } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] > gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team1}
   </>
   )
 } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1]) {
   return (
     <>
     <p>{team1} {team2}</p>
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
   <span>승부차기</span>
   </>
   )
 }
 }
function Round16Game7(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  let team1 = props.team1
  let team2 = props.team2
  
  if (gameScore[0] < 0 || gameScore[1] < 0) {
    return (
    <>
    <p>{team1} {team2}</p>
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
  </>
    )
   //  team2가 승리할 경우
   } else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] < gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team2}
   </>
   )
   } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] > gameScore[1]) {
     return (
     <>
     <p>{team1} {team2}</p>
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
   {team1}
   </>
   )
 } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1]) {
   return (
     <>
     <p>{team1} {team2}</p>
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
   <span>승부차기</span>
   </>
   )
 }
 }

function Round16Game8(props) {
  const [ gameScore, setGameScore ] = useState([-1, -1])
  let team1 = props.team1
  let team2 = props.team2
  
  if (gameScore[0] < 0 || gameScore[1] < 0) {
   return (
    <>
   <p>{team1} {team2}</p>
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
 </>
   )
  //  team2가 승리할 경우
  } else if(gameScore[0] >= 0 && gameScore[1] >= 0 && gameScore[0] < gameScore[1]) {
    return (
    <>
    <p>{team1} {team2}</p>
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
  {team2}
  </>
  )
  } else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] > gameScore[1]) {
    return (
    <>
    <p>{team1} {team2}</p>
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
  {team1}
  </>
  )
} else if (gameScore[0]>= 0 && gameScore[1] >= 0 && gameScore[0] === gameScore[1]) {
  return (
    <>
    <p>{team1} {team2}</p>
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
  <span>승부차기</span>
  </>
  )
}
}

function Round8Header() {
  return <h3>8강</h3>
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
  

  return (
    <div>
      <Header></Header>
      <Round16Header></Round16Header>
      <Round16Game1 team1={Teams16[0]} team2={Teams16[1]}></Round16Game1>
      <Round16Game2 team1={Teams16[2]} team2={Teams16[3]}></Round16Game2>
      <Round16Game3 team1={Teams16[4]} team2={Teams16[5]}></Round16Game3>
      <Round16Game4 team1={Teams16[6]} team2={Teams16[7]}></Round16Game4>
      <Round16Game5 team1={Teams16[8]} team2={Teams16[9]}></Round16Game5>
      <Round16Game6 team1={Teams16[10]} team2={Teams16[11]}></Round16Game6>
      <Round16Game7 team1={Teams16[12]} team2={Teams16[13]}></Round16Game7>
      <Round16Game8 team1={Teams16[14]} team2={Teams16[15]}></Round16Game8>
      <Round8Header></Round8Header>
      {/* {Teams8} */}
      <Article></Article>
    </div>
  );
}


export default App;