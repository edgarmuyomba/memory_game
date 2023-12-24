import { getImages } from './utils';

import '../styles/tile.css'

export default function Tile({props}) {
    let _styles = {
        backgroundImage: `url(${props.imageUrl})`, 
        backgroundColor: props.bgColor,
    }

    function handleClick() {
        if (props.imageUrl !== null) {
            props.updateTiles((images) => getImages());
        }
    }
    
    return (
        <div className="tile"  style={_styles} onClick={handleClick}>
        </div>
    );
}