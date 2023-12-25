async function getImages(num) {
    let endPoint = 'http://localhost:8000';

    let options = {
      method: 'GET',
      headers: {
        'Authorization': "Token 01fae97f632a9b2ac0a92bc945c4f25b3fae8f3c",
        'Content-type': 'application/json'
      }
    }

    let response = await fetch(`${endPoint}/api/random/${num}`, options);
    let logos = await response.json();

    let images = [];
    logos.forEach((logo) => {
      images.push(`${logo.image}`)
    })
    return images;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

export { getImages, shuffleArray };