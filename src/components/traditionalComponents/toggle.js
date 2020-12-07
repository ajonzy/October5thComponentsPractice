import React, { Component } from "react"

export default class Toggle extends Component {
    constructor() {
        super()

        this.state = {
            visibility: "visible",
            buttonText: "Hide"
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({
            visibility: this.state.visibility === "visible" ? "hidden" : "visible",
            buttonText: this.state.buttonText === "Hide" ? "Show" : "Hide"
        })
    }

    render() {
        return (
            <div className="toggle-wrapper">
                <h3 style={{ visibility: this.state.visibility }}>Hide Me!</h3>
                <button onClick={this.handleToggle}>{this.state.visibility === "visible" ? "Hide" : "Show"}</button>
            </div>
        )
    }
}