import React from "react";

interface Counter {
    text: string;
    counter: number;
}
export const Counter = React.memo(({text, counter}: Counter) => {
    console.log(`Counter-Child${text}`);
    return <p>{text}: {counter}</p>
})
Counter.displayName = 'Counter';