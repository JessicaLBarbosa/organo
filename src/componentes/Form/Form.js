import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import InputText from '../InputText'
import './Form.css'

export const Form = ({aoCadastrar, times}) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSubmeter = (evento) => {
    evento.preventDefault()
    console.log('form enviado', nome, cargo, imagem, time )
    aoCadastrar({
        nome,
        cargo,
        imagem,
        time
    })
  }

  return (
    <section className="formulario-container">
        <form className="formulario" onSubmit={aoSubmeter}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <InputText
                obrigatorio={true}
                label='Nome'
                placeholder='Digite seu nome '
                valor={nome}
                aoAlterado={valor => setNome(valor)}/>
            <InputText
                obrigatorio={true}
                label='Cargo' 
                placeholder='Digite seu cargo '
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}/>
            <InputText 
                label='Imagem' 
                placeholder='Informe o endereço da imagem '
                aoAlterado={valor => setImagem(valor)}/>
            <Dropdown 
                obrigatorio={true}
                label='Times'
                items={times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}/>
            <Button texto='Criar card' />
        </form>
    </section>
  )
}