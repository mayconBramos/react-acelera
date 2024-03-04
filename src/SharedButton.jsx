/**
 * Exemplo de utilização do React Hook useState
 * (utilizado em conjunto com o componente: SimpleButton)
 *  */ 
import SimpleButton from "./SimpleButton";

function SharedButton() {
   console.log("Criando o componente SharedButton");

    return (
        <>
            <SimpleButton nome="Botao 1"/>
            <SimpleButton nome="Botao 2"/>
        </>
    )
}

export default SharedButton;