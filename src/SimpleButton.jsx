/**
 * Exemplo de utilização do React Hook useState
 * (utilizado em conjunto com os componentes: SharedButton e SharedComponent)
 *  */ 
import { useState } from "react";

function SimpleButton(props) {
   const [count, setCount] = useState(0);
   console.log("Criando o componente SimpleButton: ",props.nome);

   function handleClick() {
       setCount(count + 1);
   }

   return (
       <button onClick={handleClick}>
           Contador do botão {props.nome}: {count}
       </button>
   );
}
export default SimpleButton;