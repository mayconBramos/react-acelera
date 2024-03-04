/**
 * Exemplo de utilização do React Hook useEffect
 * (utilizado em conjunto com o arquivo: UseEffectExample)
 *  */ 
export function createConnection(serverUrl, roomId) {
    // Simulando a conexão com um chat (em situação real, seria em servidor externo)
    return {
        connect() {
            console.log('✅ Conectado na sala "' + roomId + '" no servidor ' + serverUrl);
        },
        disconnect() {
            console.log('❌ Desconectado da sala "' + roomId + '" no servidor ' + serverUrl);
        }
    };
 }
