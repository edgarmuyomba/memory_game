import { useState } from "react";

export default function Scorecard() {
    const [score, setScore] = useState(0);

    return (
        <>{score}</>
    );
}