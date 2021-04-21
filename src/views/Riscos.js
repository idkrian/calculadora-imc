import React from 'react'

function Riscos() {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr class="table-active">
                    <th scope="col">Peso:</th>
                    <th scope="col">IMC:</th>
                    <th scope="col">O que pode acontecer:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-success">
                        <th scope="row">Muito abaixo do peso</th>
                        <td>16 a 16,9 kg/m2</td>
                        <td>Queda de cabelo, infertilidade, ausência menstrual</td>
                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">Abaixo do peso</th>
                        <td>17 a 18,4 kg/m2</td>
                        <td>Fadiga, stress, ansiedade</td>
                    </tr>
                    <tr className="table-success">
                        <th scope="row">Peso normal</th>
                        <td>18,5 a 24,9 kg/m2</td>
                        <td>Menor risco de doenças cardíacas e vasculares</td>
                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">Acima do peso</th>
                        <td>25 a 29,9 kg/m2</td>
                        <td>Fadiga, má circulação, varizes</td>
                    </tr>
                    <tr className="table-success">
                        <th scope="row">Obesidade Grau I</th>
                        <td>30 a 34,9 kg/m2</td>
                        <td>Diabetes, angina, infarto, aterosclerose</td>
                    </tr>
                    <tr className="table-secondary">
                        <th scope="row">Obesidade Grau II</th>
                        <td>35 a 40 kg/m2</td>
                        <td>Apneia do sono, falta de ar</td>
                    </tr>
                    <tr className="table-success">
                        <th scope="row">Obesidade Grau III</th>
                        <td>maior que 40 kg/m2</td>
                        <td>Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Riscos
