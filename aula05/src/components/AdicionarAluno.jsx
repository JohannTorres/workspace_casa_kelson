import React, { useState } from 'react'
import axios from 'axios'

const AdicionarAluno = () => {

    const url = "http://localhost:3000/alunos"

   const [nome, setNome] = useState("")
   const [email, setEmail] = useState("")
   const [curso, setCurso] = useState("")

   const enviarParaOBackend = async (dadosDoForm) => {
        const response = await axios.post(url, dadosDoForm)
        console.log("aluno cadastrado com sucesso!")
        alert("Aluno cadastrado com sucesso!")

   }

   const handleSubmit = (event) => {
    event.preventDefault() //nao deixa recarregar a pagina

    const dadosDoForm = {
        nome: nome, //pegando valores do useState
        email: email, //pegando valores do useState
        curso: curso //pegando valores do useState
    }
    // nao vamos precisar mais disso pois o axios vai fazer a conversao
    //const jsonParaEnviarParaOBackend = JSON.stringify(dadosDoForm)
     
    enviarParaOBackend(dadosDoForm)

    setNome("")
    setCurso("")
    setEmail("")

   }


  return (
    <div>

        <h1>Cadastro de Alunos</h1>

        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="nome">Nome: </label>
            <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />    
            </div>    

            <div>
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />    
            </div>    

            <div>
            <label htmlFor="curso">Curso: </label>
            <input
                type="text"
                id="curso"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
            />    
            </div>    

            <button type="submit">Cadastrar</button>

        </form>
      
    </div>
  )
}

export default AdicionarAluno
