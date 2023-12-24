function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function honeyComb() {
    const honeycomb = [
        [false, false, true, true, true, false, false],
        [false, true, true, true, true, true, false],
        [true, true, true, true, true, true, true],
        [false, true, true, true, true, true, false],
        [false, false, true, true, true, false, false],
    ];

    // placing the images
    for (let i = 0; i < 8; i++) {
        let x = 0, y = 0;
        while (!honeycomb[x][y]) {
            x = random(0, 4);
            y = random(0, 6)
        }
        honeycomb[x][y] = 'image'
    }

    // placing the rest of the tiles
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 7; j++) {
            if (honeycomb[i][j] === true) {
                honeycomb[i][j] = 'noimage'
            } else continue
        }
    }
    return honeycomb;
}

// console.log(honeyComb());