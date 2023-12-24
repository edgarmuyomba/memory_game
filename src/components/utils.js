function getImages() {
    let images = [];
    for (let i = 0; i < 9; i++) {
        images.push('src/assets/batman.png');
    }
    return images;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

export { getImages, shuffleArray };