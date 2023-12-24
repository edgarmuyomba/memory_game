import Scorecard from "./Scorecard";

import '../styles/scoreboard.css'

export default function Scoreboard() {
    return (
        <aside>
            <p className="title">
                <span>Memory</span> Game.
            </p>
            <p className="score">
                Score:
                <span>
                    <Scorecard />
                </span>
            </p>
        </aside>
    );
}