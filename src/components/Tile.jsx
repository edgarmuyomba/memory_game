import { getLogos, shuffleArray } from './utils';
import { useState, useEffect } from 'react';

import '../styles/tile.css'

export default function Tile({ props }) {

  let imageUrl = props.logo !== null ? props.logo.image : null;

  const [styles, setStyles] = useState({
    backgroundImage: imageUrl,
    backgroundColor: props.bgColor,
  });

  const fetchData = async () => {
    try {
      props.updateTiles(props.buffer.slice(0, 9));
      const data = await getLogos(9);
      props.updateBuffer(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = () => {
    if (props.logo !== null) {

      props.trackClicks(props.logo);
      fetchData(); // might have to change the timing here!!!
      // Trigger the fade-in animation
      animateTiles();
    }

  };

  const animateTiles = () => {
    const tiles = document.querySelectorAll('.tile');

    // Shuffle the array of tiles
    const shuffledTiles = Array.from(tiles);
    shuffleArray(shuffledTiles);

    shuffledTiles.forEach((tile, i) => {
      // Set different animation delays for fading out
      const delay = i * 90; // Adjust the delay as needed
      tile.style.animation = `fadeOut 1s ${delay}ms forwards`;
    });

    // After a delay, reset the animation to fade back in and update the image
    setTimeout(() => {
      setStyles({
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: props.bgColor,
      });

      shuffledTiles.forEach((tile, i) => {
        // Set different animation delays for fading in
        const fadeInDelay = i * 90; // Adjust the delay as needed
        tile.style.animation = `fadeIn 1s ${fadeInDelay}ms forwards`;
      });
    }, 0); // Adjust the delay as needed
  };

  useEffect(() => {
    // Update styles when logo.image or bgColor changes
    setStyles({
      backgroundImage: imageUrl,
      backgroundColor: props.bgColor,
    });
  }, [imageUrl, props.bgColor]);

  return (
    <div className="tile" style={{ backgroundColor: styles.backgroundColor }} onClick={handleClick}>
      <img src={styles.backgroundImage} alt="" />
    </div>
  );
}
