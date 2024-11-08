import React from 'react'

import './Tutorials.css'

import { tutorials, fixCamera } from '../../utils/data'

export default function Tutorials() {
    return (
        <div className="tutorials-container">
            <h1 className="tutorials-heading" style={{color:'black'}}>Basic Tutorials</h1>
            <div className="tutorials-content-container">
                {tutorials.map((tutorial) => (
                    <p className="tutorials-content" style={{color:'black'}}>{tutorial}</p>
                ))}
            </div>
            <h1 className="tutorials-heading" style={{color:'black'}}>Camera Not Working?</h1>
            <div className="tutorials-content-container">
                {fixCamera.map((points) => (
                    <p className="tutorials-content" style={{color:'black'}}>{points}</p>
                ))}
            </div>
            
        </div>
    )
}
