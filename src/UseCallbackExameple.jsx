/**
 * Exemplo de utilização do React Hook useCallback
 *  */ 
import React, { memo, useCallback, useState } from 'react'

const Logger = memo((props) => {
    props.log()
    return null
})

export default function UseCallbackExample() {
    const [count, setCount] = useState(0)
    const count3 = Math.floor(count / 3)

    const memoizedFunction = useCallback(() => {
        console.log('useCallback')
    }, [count3])

    const normalFunction = () => {
        console.log('normal')
    }

    return (
        <>
            <button onClick={() => { setCount(count + 1) }}>
                Increment {count}
            </button>
            <Logger log={memoizedFunction} />
            <Logger log={normalFunction} />
        </>
    )
}