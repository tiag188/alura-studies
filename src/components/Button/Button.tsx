import React from 'react';
import './Button.module.scss'

//Criar componente com classe (Class Component)
class ButtonClassComponent extends React.Component {
    render() {
        return(
            <button>Botão</button>
        )
    }
}

//Criar componentes funcionais, com uso de const atribuida em uma função
const ButtonFunctionComponente: React.FC = () => {
    return(
        <button>Botão</button>
    )
};

export default ButtonClassComponent;
