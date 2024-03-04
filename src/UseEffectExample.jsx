/**
 * Exemplo de utilização do React Hook useEffect
 * (utilizado em conjunto com o arquivo: UseEffectExampleChat)
 *  */ 
import { useState, useEffect } from 'react';
import { createConnection } from './UseEffectExampleChat';

function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [serverUrl, roomId]);

    return (
        <>
            <label>
                Servidor:{' '}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                />
            </label>
            <h1>Entrou na sala {roomId}!</h1>
            <label>
                Mensagem:{' '}
                <input value={message} onChange={e => setMessage(e.target.value)} />
            </label>
        </>
    );
}

export default function UseEffectExample() {
    const [show, setShow] = useState(false);
    const [roomId, setRoomId] = useState('general');
    return (
        <>
            <label>
                Escolha uma sala:{' '}
                <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}>
                    <option value="geral">geral</option>
                    <option value="estudo">estudo</option>
                    <option value="duvidas">duvidas</option>
                </select>
                <button onClick={() => setShow(!show)}>
                    {show ? 'Fechar chat' : 'Abrir chat'}
                </button>
            </label>
            {(show) ? <hr /> : ''}
            {show && <ChatRoom roomId={roomId} />}
        </>
    );
}
