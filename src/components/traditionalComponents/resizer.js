import React, { Component } from "react"

export default class Resizer extends Component {
    constructor() {
        super()

        this.state = {
            size: 12,
            amountToChangeBy: 1
        }

        this.handleResize = this.handleResize.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleResize(direction) {
        this.setState({
            size: direction === "+" ? this.state.size + this.state.amountToChangeBy : this.state.size - this.state.amountToChangeBy
        })
    }

    handleChange(event) {
        this.setState({ amountToChangeBy: event.target.valueAsNumber })
    }

    render() {
        return (
            <div className="resizer-wrapper">
                <h3 
                    style={{ fontSize: `${this.state.size}px` }}
                >{`${this.state.size}px`}</h3>
                <input type="number" value={this.state.amountToChangeBy} onChange={this.handleChange}/>
                <button onClick={() => this.handleResize("+")}>Bigger</button>
                <button onClick={() => this.handleResize("-")}>Smaller</button>
            </div>
        )
    }
}