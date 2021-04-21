import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="jumbotron  text-center">
                <h1 className="display-3" style={{textAlign: 'center'}}>Olá!</h1>
                <p className="lead"> Esta é uma calculadora de Índice de Massa Corporal 
                feita utilizando Javascript, ReactJS e Bootstrap. <br/>
                Ela é utilizada para medir o seu índice para assim calcular se você está
                no peso ideal dependendo de sua altura.</p>
                <hr className="my-4"/>
                    <p>Clique abaixo para começar a calcular!</p>
                    <p className="lead  text-center">
                    <Link type="button" style={{textAlign: 'center', alignItems:'center'}} to={'/calculadora'} className="btn btn-lg btn-outline-success">Calcular</Link>
                    </p>
            </div>
        </div>
    )
}

export default Home
