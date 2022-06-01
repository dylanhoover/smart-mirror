import * as React from 'react'
import Header from "../components/header/Header";
import Layout1 from "../layouts/Layout1";
import Layout2 from '../layouts/layout2';
import {useContext, useState } from 'react'
import { LayoutContext } from '../Context';

export default function MainPage() {
    debugger
    const value = useContext(LayoutContext)

    return(
        <div>
            <Header />
            {value === 1 ? <Layout2 /> : <Layout1 />}
            {/* <Layout1 /> */}
        </div>
    )
}