import { getImages, shuffleArray } from './utils';
import { useState, useEffect } from 'react';

import '../styles/tile.css'

export default function Tile({ props }) {
  const [styles, setStyles] = useState({
    backgroundImage: `url(${props.imageUrl})`,
    backgroundColor: props.bgColor,
  });

  const fetchData = async () => {
    try {
      const data = await getImages();
      props.updateTiles((images) => data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = () => {
    if (props.imageUrl !== null) {

      // Trigger the fade-in animation
      animateTiles();
      setTimeout(() => fetchData(), 1000);
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
        backgroundImage: `url(${props.imageUrl})`,
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
    // Update styles when imageUrl or bgColor changes
    setStyles({
      backgroundImage: `url(${props.imageUrl})`,
      backgroundColor: props.bgColor,
    });
  }, [props.imageUrl, props.bgColor]);

  return (
    <div className="tile" style={{ backgroundColor: styles.backgroundColor }} onClick={handleClick}>
      <div className="logo" style={{ backgroundImage: styles.backgroundImage }}></div>
    </div>
  );
}
