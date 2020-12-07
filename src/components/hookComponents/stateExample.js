import React, { useState } from 'react'

export default function example(props) {
    // this.state = {
    //     count: 0
    // }

    // this.setState({ count: this.state.count + 1 })

    const [count, setCount] = useState(0)

    // function handleClick() {
    //     setCount(count + 1)
    // }

   return (
       <div className='example-wrapper'>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>
       </div>
   )
}