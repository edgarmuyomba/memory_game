import '../styles/scoreboard.css'

export default function Scoreboard({ score, highScore }) {
    return (
        <aside>
            <p className="title">
                <span>Memory</span> Game.
            </p>
            <p className="guide">Select as many images as possible without repeating an image!</p>
            <div className="scores">
                <p className="score">
                    Score <br/>
                    <span>
                        {score}
                    </span>
                </p>
                <p className="hs">
                    Highscore <br />
                    <span>
                        {highScore}
                    </span>
                </p>
            </div>
            <footer>
                <a href="https://github.com/edgarmuyomba">&copy; Edgar Muyomba</a>
            </footer>
        </aside>
    );
}