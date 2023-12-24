import Tile from "./Tile";

import '../styles/gameplay.css'

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function honeyComb() {
    const honeycomb = [
        [false, false, true, true, true, false, false],
        [false, true, true, true, true, false, false],
        [true, true, true, true, true, false, false],
        [false, true, true, true, true, false, false],
        [false, false, true, true, true, false, false],
    ];

    // placing the images
    for (let i = 0; i < 9; i++) {
        let x = 0, y = 0;
        let cell = honeycomb[x][y];
        while (cell !== true) {
            x = random(0, 4);
            y = random(0, 6);
            cell = honeycomb[x][y];
        }
        honeycomb[x][y] = <Tile imageUrl={'src/assets/batman.png'} />
    }

    // placing the rest of the tiles
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 7; j++) {
            if (honeycomb[i][j] === true) {
                honeycomb[i][j] = <Tile />
            } else continue
        }
    }

    // html-ising
    return honeycomb;
}

export default function Gameplay() {
    const rows = honeyComb();

    return (
        <div className="gameplay">
            <div className="gameContainer">
                {
                    rows.map((row, index) => {
                        switch(index) {
                            case 0:
                                return <div key={index} className="row three">
                                            {
                                                row.map((tile, index) => {
                                                    return tile && tile;
                                                })
                                            }
                                       </div>;
                            case 1:
                                return <div key={index} className="row four" style={{ top: '-2rem'}}>
                                            {
                                                row.map((tile, index) => {
                                                    return tile && tile;
                                                })
                                            }
                                       </div>;
                            case 2:
                                return <div key={index} className="row five" style={{ top: '-4rem'}}>
                                            {
                                                row.map((tile, index) => {
                                                    return tile && tile;
                                                })
                                            }
                                       </div>;
                            case 3:
                                return <div key={index} className="row four" style={{ top: '-6rem'}}>
                                            {
                                                row.map((tile, index) => {
                                                    return tile && tile;
                                                })
                                            }
                                       </div>;
                            case 4:
                                return <div key={index} className="row three" style={{ top: '-8rem'}}>
                                            {
                                                row.map((tile, index) => {
                                                    return tile && tile;
                                                })
                                            }
                                       </div>;
                        }
                    })
                }
            </div>
        </div>
    );
}