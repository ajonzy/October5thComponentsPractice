import React, { Component } from "react"

export default class Color extends Component {
    constructor() {
        super()

        this.state = {
            color: "black",
            colorInput: "black",
            text: "Color Me!",
            textInput: "Color Me!"
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit() {
        this.setState({ 
            color: this.state.colorInput,
            text: this.state.textInput
        })
    }

    render() {
        return (
            <div className="color-wrapper">
                <h3 style={{ color: this.state.color }}>{this.state.text}</h3>
                <input type="text" name="colorInput" value={this.state.colorInput} onChange={this.handleChange} />
                <input type="text" name="textInput" value={this.state.textInput} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}