async function getLogos(num) {
    let endPoint = 'https://logoapi-production.up.railway.app';

    let options = {
      method: 'GET',
      headers: {
        'Authorization': "Token 01fae97f632a9b2ac0a92bc945c4f25b3fae8f3c",
        'Content-type': 'application/json'
      }
    }

    let response = await fetch(`${endPoint}/api/random/${num}`, options);
    let logos = await response.json();

    return logos;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

export { getLogos, shuffleArray };