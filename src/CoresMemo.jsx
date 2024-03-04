/**
 * Exemplo de utilização do React Hook useMemo
 *  */ 
import React, { useMemo, useState } from 'react'

function randomColor() {
    return `#${Math.random()
        .toString(16)
        .substring(2, 8)}`
}

export default function CoresMemo() {
    const [count, setCount] = useState(0)
    const [corDaLetra, setCorDaLetra] = useState('white')

    const normalStyle = {
        backgroundColor: randomColor(),
        color: corDaLetra,
    }

    const memoizedStyle = useMemo(() => {
        return {
            backgroundColor: randomColor(),
            color: corDaLetra,
        }
    }, [corDaLetra])

    function handleClick() {
        setCount(count + 1)
        setCorDaLetra((count % 5 === 0) ? "black" : "white")
    }

    return (
        <>
            <button onClick={handleClick}>
                Increment {count}
            </button>
            <h1 style={memoizedStyle}>Memoized</h1>
            <h1 style={normalStyle}>Normal</h1>
        </>
    )
}
