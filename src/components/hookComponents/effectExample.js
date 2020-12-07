import React, { useState, useEffect } from 'react'

const exampleData = [
    {
        name: "Alex",
        age: 29
    }
]

export default function example(props) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setData(exampleData)
        setIsLoading(false)
        // setCount(count + 1)

        console.log("Use Effect Triggered!")

        return () => {
            console.log("Cleanup!")
        }
    }, [])

   return (
       <div className='example-wrapper'>
           {isLoading
                ? <h3>Loading...</h3>
                : <h3>{data[0].name}</h3>
            }
            <h3>{count}</h3>
       </div>
   )
}