/**
 * Exemplo de utilização do React Class Component
 *  */ 
import React from 'react';

class Capitulo extends React.Component {
   render() {
       return <h2>Capítulo {this.props.numero}</h2>;
   }
}

class Livro extends React.Component {
   render() {
       return (
           <>
               <h1>Livro INTERESSANTE</h1>
               <Capitulo numero="1" />
           </>
       );
   }
}

export default Livro;