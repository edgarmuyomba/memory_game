import '../styles/tile.css'

export default function Tile({imageUrl}) {
    return (
        <div className="tile"  style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
    );
}