'use client'

import {Switch} from "@/components";

export const Header = () => {
    return (
        <header>
            <Switch initialState={true} onToggleOn={() => null} onToggleOff={() => null}/>
        </header>
    )
}