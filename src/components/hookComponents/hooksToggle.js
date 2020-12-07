import React, { useState } from "react"

export default function toggle() {
    const [visibility, setVisibility] = useState("visible")
    const [buttonText, setButtonText] = useState("Hide")

    function handleToggle() {
        setVisibility(visibility === "visible" ? "hidden" : "visible")
        setButtonText(buttonText === "Hide" ? "Show" : "Hide")
    }
    
    return (
        <div className="toggle-wrapper">
            <h3 style={{ visibility: visibility }}>Hide Me!</h3>
            <button onClick={handleToggle}>{buttonText}</button>
        </div>
    )
}