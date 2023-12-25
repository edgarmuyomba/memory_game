import Scorecard from "./Scorecard";
import Highscore from "./Highscore";

import '../styles/scoreboard.css'

export default function Scoreboard() {
    return (
        <aside>
            <p className="title">
                <span>Memory</span> Game.
            </p>
            <div className="scores">
                <p className="score">
                    Score <br/>
                    <span>
                        <Scorecard />
                    </span>
                </p>
                <p className="hs">
                    Highscore <br />
                    <span>
                        <Highscore />
                    </span>
                </p>
            </div>
            <footer>
                <a href="https://github.com/edgarmuyomba">&copy; Edgar Muyomba</a>
            </footer>
        </aside>
    );
}