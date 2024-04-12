'use client';
import { useState, useEffect } from "react";


export default function Clicks() {
    useEffect(() => {
        alert(`You have clicked ${clicks} number of times!`);
    });
    const [clicks, setClicks] = useState(0);

    return <div>
        <button onClick={() => setClicks(clicks + 1)} disabled={clicks >= 3}>
        total clicks - {clicks}
        </button>
        <button onClick={() => setClicks(clicks + 1)} disabled={clicks >= 3}>
        total clicks - {clicks}
        </button>
    </div>
}