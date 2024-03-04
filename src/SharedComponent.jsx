/**
 * Exemplo de utilização do React Hook useState
 * (utilizado em conjunto com o componente: SimpleButton)
 *  */ 
import {useState} from "react";
import SimpleButton from "./SimpleButton";

export default function SharedComponent() {
    const[count, setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }

    return (
        <>
            <p>Contador: {count}</p>
            <NovoBotao contador={count} clicar={handleClick} nome="1"/>
            <NovoBotao contador={count} clicar={handleClick} nome="2"/>
            <NovoBotao contador={count} clicar={handleClick} nome="3"/>
            <br/>
            <SimpleButton nome="Botao individual"/>
        </>
    )
}

function NovoBotao({contador, clicar, nome}) {
    return (
        <button onClick={clicar}>Botão {nome} - Contador: {contador}</button>
    )
}