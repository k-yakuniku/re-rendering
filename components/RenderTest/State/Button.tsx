'use client';

import React, { MouseEventHandler } from "react";

interface ButtonProps {
    handle: MouseEventHandler<HTMLButtonElement> | undefined;
    text: string;
}
export const Button = React.memo(({handle, text}: ButtonProps) => {
    console.log(`Button-Childe${text}`);
    return <button onClick={handle} className="bg-slate-400 my-2 w-10 rounded-md hover:bg-slate-300     ">{text}</button>
})
Button.displayName = 'Button';