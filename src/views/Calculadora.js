import React, {useState} from 'react'

function Calculadora() {

    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [resultado, setResultado] = useState('')


    const somar = () =>{
        const alturaInt = Number(altura)
        const pesoInt = Number(peso)
        const calculo = (pesoInt / ((alturaInt/100)**2)).toFixed(2)

        //---------------------Validações----------------------//
        if(isNaN(alturaInt) || isNaN(pesoInt)){
            setResultado(`Digite apenas números!`)           
        }
        else if(!alturaInt){
            setResultado(`Preencha o campo de altura!`) 
        }
        else if(!pesoInt){
            setResultado(`Preencha o campo de peso!`) 
        }

        //---------------------Resultados----------------------//
        if(calculo >= 16 && calculo <= 16.9){
            setResultado(`O calculo do seu IMC é de: ${calculo} e você está muito abaixo do peso!`)
        }
        else if(calculo >= 17 && calculo <= 18.4){
            setResultado(`O calculo do seu IMC é de: ${calculo} e você está abaixo do peso!`)
        }
        else if(calculo >= 18.5 && calculo <= 24.9){
            setResultado(`O calculo do seu IMC é de: ${calculo} e você está no peso normal!` )
            
        }
        else if(calculo >= 25 && calculo <= 29.9){
            setResultado(`O calculo do seu IMC é de: ${calculo} e você está acima do peso!`)
        }
        else if(calculo >= 30 && calculo <= 34.9){
            setResultado(`O calculo do seu IMC é de: ${calculo} e você está com Obesidade Grau I!`)
        }
        else if(calculo >= 35 && calculo <= 40){
            setResultado(`O calculo do seu IMC é de: ${calculo} e você está com Obesidade Grau II!`)
        }
        else if(calculo > 40){
            setResultado(`O calculo do seu IMC é de: ${calculo} e você está com Obesidade Grau III!`)
        }

        
  
    }

    return (
        <div>
            <div className='container'>
                <div className="jumbotron ">
                <div className="card border-success mb-3" style={{maxWidth: '40em', margin: 'auto', textAlign: 'center'}}>
                    <div className="card-header">Calculadora</div>
                    <div className="card-body text-center">
                        <label className="col-form-label" style={{fontSize: '20px'}} >Digite a sua altura em CM:</label>
                        <input type="text" style={{width: '200px', margin: 'auto'}} value={altura} onChange={e => setAltura(e.target.value)} className="form-control" placeholder="Ex: 184"/>

                        <label className="col-form-label" style={{fontSize: '20px'}} >Digite seu peso em KG:</label>
                        <input type="text" style={{width: '200px', margin: 'auto'}} value={peso} onChange={e => setPeso(e.target.value)} className="form-control" placeholder="Ex: 72"/>
                        <br/>
                        <button type="button" onClick={somar} className="btn btn-outline-success">Calcular</button>
                        <br/>
                        <div style={{marginTop: '15px', fontSize: '16px'}}>{resultado}</div>
                    </div>
                </div>
                </div>

             </div>
        </div>
    )
}

export default Calculadora
