import Scoreboard from "./components/Scoreboard";
import Gameplay from "./components/Gameplay";

import { useState } from "react";

export default function App() {
  const [hs, setHs] = useState(0);
  const [score, setScore] = useState(0);

  let scoreboardProps = {
    score: score,
    highScore: hs
  }

  let gameplayProps = {
    score: score,
    highScore: hs,
    updateScore: setScore,
    updateHighScore: setHs
  }

  return (
    <>
      <Scoreboard {...scoreboardProps}/>
      <Gameplay {...gameplayProps} />
    </>
  )
}