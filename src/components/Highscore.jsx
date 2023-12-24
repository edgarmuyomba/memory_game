import { useState } from "react";

export default function Highscore() {
    const [hs, setHs] = useState(0);

    return (
        <>{hs}</>
    );
}