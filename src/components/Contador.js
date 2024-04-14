import { useState } from "react";

function Contador() {

    const [numero, setNumero] = useState(0);


    return (
        <div>
            <div className="showValor">
                Aqui vai o valor: {numero}
            </div>
            <div className="btn-container">
                <button className="btn-adicionar" onClick={() => setNumero(numero + 1)}>+</button>
                <button className="btn-zerar" onClick={() => setNumero(0)}>0</button>
                <button className="btn-subtrair" onClick={() => setNumero(numero - 1)}>-</button>
            </div> 
        </div>
    )
}

export default Contador;