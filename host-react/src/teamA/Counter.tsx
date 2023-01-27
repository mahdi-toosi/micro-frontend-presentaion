import React, { useEffect, useRef } from "react";
import Counter from "teamA/Counter";

export default function Counter2() {
    const divRef = useRef(null);
    useEffect(() => {
        Counter(divRef.current);
    }, []);

    return <div ref={divRef}></div>;
}
