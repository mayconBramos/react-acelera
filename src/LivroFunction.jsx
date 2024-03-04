import React, { useState } from 'react';

const capitulosPadrao = [
    { numero: null, nome: "Sumário", conteudo: "", esconderConteudo: false },
    { numero: "1", nome: "Introdução", conteudo: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ...", esconderConteudo: false },
    { numero: "2", nome: "Desenvolvimento", conteudo: "Fusce sapien elit, sollicitudin nec quam vitae, venenatis aliquam nulla. ...", esconderConteudo: false },
    { numero: "3", nome: "Conclusão", conteudo: "Fusce sapien elit, sollicitudin nec quam vitae, venenatis aliquam nulla. ...", esconderConteudo: false },
    { numero: null, nome: "Referências", conteudo: "Fusce sapien elit, sollicitudin nec quam vitae, venenatis aliquam nulla. ...", esconderConteudo: false },
    { numero: "4", nome: "Agradecimentos", conteudo: "Fusce sapien elit, sollicitudin nec quam vitae, venenatis aliquam nulla. ...", esconderConteudo: false },
    { numero: "5", nome: "Notas do Autor", conteudo: "Fusce sapien elit, sollicitudin nec quam vitae, venenatis aliquam nulla. ...", esconderConteudo: false },
];

const Livro = ({ livro }) => {
    const [esconderConteudo, setEsconderConteudo] = useState(true);
    const [capitulos, setCapitulos] = useState(livro.capitulos);

    const handleToggleEsconder = () => {
        setEsconderConteudo(!esconderConteudo);
    };

    const handleToggleEsconderCapitulo = (index) => {
        const newCapitulos = [...capitulos];
        newCapitulos[index].esconderConteudo = !newCapitulos[index].esconderConteudo;
        setCapitulos(newCapitulos);
    };

    const sumario = capitulos
        .filter(capitulo => capitulo.numero !== null)
        .map(capitulo => `${capitulo.numero}.${capitulo.nome}`)
        .join('; ');

    capitulos[0].conteudo = sumario;

    return (
        <>
            <h1>{livro.titulo}</h1>
            <button onClick={handleToggleEsconder}>
                {esconderConteudo ? 'Mostrar' : 'Esconder'} Conteúdo
            </button>
            {esconderConteudo ? null : (
                <>
                    {capitulos.map((capitulo, index) => (
                        <div key={`capitulo-${index}`}>
                            <h2>{capitulo.numero ? `${capitulo.numero}. ` : ''}{capitulo.nome}</h2>
                            <button onClick={() => handleToggleEsconderCapitulo(index)}>
                                {capitulo.esconderConteudo ? 'Mostrar' : 'Esconder'}
                            </button>
                            <p>{capitulo.esconderConteudo ? '' : capitulo.conteudo}</p>
                        </div>
                    ))}
                </>
            )}
        </>
    );
};

const Biblioteca = () => {
    const [livros] = useState([
        { titulo: "Livro INTERESSANTE", capitulos: capitulosPadrao },
        
        { titulo: "Livro 2", capitulos: capitulosPadrao },

        { titulo: "Livro 3", capitulos: capitulosPadrao },
    ]);

    return (
        <>
            {livros.map((livro, index) => (
                <Livro
                    key={`livro-${index}-${livro.titulo}`}
                    livro={livro}
                />
            ))}
        </>
    );
};

export default Biblioteca;
