import React, { Component } from "react"

export default class Alignment extends Component {
    constructor() {
        super()

        this.state = {
            alignment: "left"
        }

        this.handleAlignmentChange = this.handleAlignmentChange.bind(this)
    }

    handleAlignmentChange(newAlignment) {
        this.setState({ alignment: newAlignment })
    }

    render() {
        return (
            <div className="alignment-wrapper">
                <h2 className={this.state.alignment}>Align Me!</h2>
                <button onClick={() => this.handleAlignmentChange("left")}>Left</button>
                <button onClick={() => this.handleAlignmentChange("center")}>Center</button>
                <button onClick={() => this.handleAlignmentChange("right")}>Right</button>
            </div>
        )
    }
}