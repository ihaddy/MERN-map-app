import React from 'react'
import './MainHeader.css'

export default function MainHeader(props) {
    return (
        <div>
            <header className="main-header">
                {props.children}
            </header>
        </div>
    )
}
