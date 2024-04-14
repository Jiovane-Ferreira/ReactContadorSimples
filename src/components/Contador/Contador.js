// Faz a importação do "useState" da biblioteca react

import { useState } from "react";
import './Contador.css';

// Cria a função/componente a ser utilizado
function Contador() {

    // Inicializa a variável utilizando o useState e o parâmetro "set"
    const [numero, setNumero] = useState(0);

    // Cria funções anônimas/métodos que realizam as ações necessárias    
    const adicionarNumero = () => {
        setNumero((prevNumero) => prevNumero + 1);
    }

    const zerarNumero = () => {
        setNumero((prevNumero) => prevNumero = 0);
    }

    const subtrairNumero = () => {
        setNumero((prevNumero) => prevNumero - 1);
    }

    // Parte que Renderiza o componente na interface
    return (
        <div className="contador-container">
            <div className="showValor">
                {numero}
            </div>
            <div className="btn-container">
                <button className="btn subtrair" onClick={subtrairNumero}>-</button>
                <button className="btn zerar" onClick={zerarNumero}>0</button>
                <button className="btn adicionar" onClick={adicionarNumero}>+</button>             
            </div> 
        </div>
    )
}

// Exporta componente
export default Contador;