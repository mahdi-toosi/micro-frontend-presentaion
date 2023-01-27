import React, { useState } from "react";

export default function Home() {
    const [counter, setCounter] = useState(1);
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => setCounter((c) => c + 1)}>react counter 👉🏻 {counter}</button>
        </div>
    );
}
