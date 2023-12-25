import { useState, useEffect } from "react";
import Tile from "./Tile";
import { getImages } from "./utils";

import '../styles/gameplay.css'

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomGrey() {
    // Generate a random value between 0 and 255 for the RGB components
    const randomValue = Math.floor(Math.random() * (200 - 50 + 1)) + 50;

    // Create a grayscale color using the random value
    const greyColor = `rgb(${randomValue}, ${randomValue}, ${randomValue})`;

    return greyColor;
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
        honeycomb[x][y] = i;
    }

    // placing the rest of the tiles
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 7; j++) {
            if (honeycomb[i][j] === true) {
                honeycomb[i][j] = 'noimage';
            } else continue
        }
    }

    // html-ising
    return honeycomb;
}

export default function Gameplay() {
    const [images, setImages] = useState([null, null, null, null, null, null, null, null, null]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getImages();
                setImages(data);
                const honeyCombRows = honeyComb();
                setRows(honeyCombRows);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // when the images are changed, the ordering of the images also changes
        const honeyCombRows = honeyComb();
        setRows(honeyCombRows);
    }, images);


    return (
        <div className="gameplay">
            <div className="gameContainer">
                {
                    rows.map((row, index) => {
                        switch (index) {
                            case 0:
                                return <div key={index} className="row three">
                                    {
                                        row.map((tile, index) => {
                                            return typeof (tile) === 'number'
                                                ?
                                                <Tile key={index} props={{
                                                    imageUrl: images[tile],
                                                    bgColor: 'grey',
                                                    updateTiles: setImages,
                                                }} />
                                                : tile === 'noimage' && <Tile key={index} props={{
                                                    bgColor: getRandomGrey(),
                                                    imageUrl: null
                                                }} />
                                        })
                                    }
                                </div>;
                            case 1:
                                return <div key={index} className="row four" style={{ top: '-2rem' }}>
                                    {
                                        row.map((tile, index) => {
                                            return typeof (tile) === 'number'
                                                ?
                                                <Tile key={index} props={{
                                                    imageUrl: images[tile],
                                                    bgColor: 'grey',
                                                    updateTiles: setImages,
                                                }} />
                                                : tile === 'noimage' && <Tile key={index} props={{
                                                    bgColor: getRandomGrey(),
                                                    imageUrl: null
                                                }} />
                                        })
                                    }
                                </div>;
                            case 2:
                                return <div key={index} className="row five" style={{ top: '-4rem' }}>
                                    {
                                        row.map((tile, index) => {
                                            return typeof (tile) === 'number'
                                                ?
                                                <Tile key={index} props={{
                                                    imageUrl: images[tile],
                                                    bgColor: 'grey',
                                                    updateTiles: setImages,
                                                }} />
                                                : tile === 'noimage' && <Tile key={index} props={{
                                                    bgColor: getRandomGrey(),
                                                    imageUrl: null
                                                }} />
                                        })
                                    }
                                </div>;
                            case 3:
                                return <div key={index} className="row four" style={{ top: '-6rem' }}>
                                    {
                                        row.map((tile, index) => {
                                            return typeof (tile) === 'number'
                                                ?
                                                <Tile key={index} props={{
                                                    imageUrl: images[tile],
                                                    bgColor: 'grey',
                                                    updateTiles: setImages,
                                                }} />
                                                : tile === 'noimage' && <Tile key={index} props={{
                                                    bgColor: getRandomGrey(),
                                                    imageUrl: null
                                                }} />
                                        })
                                    }
                                </div>;
                            case 4:
                                return <div key={index} className="row three" style={{ top: '-8rem' }}>
                                    {
                                        row.map((tile, index) => {
                                            return typeof (tile) === 'number'
                                                ?
                                                <Tile key={index} props={{
                                                    imageUrl: images[tile],
                                                    bgColor: 'grey',
                                                    updateTiles: setImages,
                                                }} />
                                                : tile === 'noimage' && <Tile key={index} props={{
                                                    bgColor: getRandomGrey(),
                                                    imageUrl: null
                                                }} />
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