import React, { useEffect, useState } from "react";

import "./Clock.scss";

function Clock() {
    const [timeState, setTimeState] = useState()

    useEffect(() => {
        setInterval(() => {
            const time = new Date();
            setTimeState(time.toLocaleTimeString())
        }, 1000);
    }, [])

    return <div className="big-clock">
        {timeState}
    </div>
}

export default Clock;