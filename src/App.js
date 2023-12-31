import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

//we want to iterate value of 

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

console.log("treasure:", treasureLocation)
console.log("bomb:", bombLocation)

const restartGame = () => {
  let defaultBoard = [
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ]
  setBoard(defaultBoard)
  setTreasureLocation(Math.floor(Math.random() * board.length))
  setBombLocation(Math.floor(Math.random() * board.length))
}

const handleGamePlay = (index) => {
  // alert(index)
  
  let updatedBoard = [...board]
  if(treasureLocation === index) {
    updatedBoard[index] = "💎"
    setBoard(updatedBoard)
    } else if(bombLocation === index) {
      updatedBoard[index] = "💣"
    setBoard(updatedBoard)
      } else {
        updatedBoard[index] = "🎄"
        setBoard(updatedBoard)
    }

  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value, index) => {
          return (
            <Square 
             value={value}
             key={index} 
             index={index}
             handleGamePlay={handleGamePlay}
             />
          )
        })}
        <button className="restartButton" onClick={restartGame}>Restart! 👍</button>
      </div>
    </>
  )
}

export default App
