import React, {useContext } from 'react';
import { LayoutContext } from "../../Context"
import { Switch } from '@mui/material'

export default function Header(){
    const [layout, setLayout] = useContext(LayoutContext)

    const handleSwitch = () => {
        debugger
        setLayout(2)
    }

    return(
        <div>
            <h1>Hello</h1>
            <Switch
             onChange={handleSwitch}
            />
        </div>
    )
}