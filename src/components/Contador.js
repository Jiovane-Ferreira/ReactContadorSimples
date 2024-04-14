import { useState } from "react";

function Contador() {

    const [numero, setNumero] = useState(0);


    const adicionarNumero = () => {
        setNumero((prevNumero) => prevNumero + 1);
    }

    const zerarNumero = () => {
        setNumero((prevNumero) => prevNumero = 0);
    }

    const subtrairNumero = () => {
        setNumero((prevNumero) => prevNumero - 1);
    }


    return (
        <div>
            <div className="showValor">
                Aqui vai o valor: {numero}
            </div>
            <div className="btn-container">
                <button className="btn-adicionar" onClick={adicionarNumero}>+</button>
                <button className="btn-zerar" onClick={zerarNumero}>0</button>
                <button className="btn-subtrair" onClick={subtrairNumero}>-</button>
            </div> 
        </div>
    )
}

export default Contador;