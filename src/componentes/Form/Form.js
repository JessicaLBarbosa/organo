import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import Input from '../Input'
import './Form.css'

export const Form = ({ aoCadastrar, times, cadastrarTime }) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  const aoSubmeter = (evento) => {
    evento.preventDefault()
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
            <Input
                obrigatorio={true}
                label='Nome'
                placeholder='Digite seu nome '
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <Input
                obrigatorio={true}
                label='Cargo' 
                placeholder='Digite seu cargo '
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />
            <Input 
                label='Imagem' 
                placeholder='Informe o endereço da imagem '
                aoAlterado={valor => setImagem(valor)}
            />
            <Dropdown 
                obrigatorio={true}
                label='Times'
                items={times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Button texto='Criar card' />
        </form>

        <form className="formulario" onSubmit={(evento) => {
            evento.preventDefault()
            cadastrarTime({ nome: nomeTime, cor: corTime })
        }}>
            <h2>Preencha os dados para criar um novo time.</h2>
            <Input
                obrigatorio
                label='Nome do Time'
                placeholder='Digite o nome do time '
                valor={nomeTime}
                aoAlterado={valor => setNomeTime(valor)}
            />
            <Input
                obrigatorio
                type='color'
                label='Cor do Time' 
                placeholder='Escolha a cor do time '
                valor={corTime}
                aoAlterado={valor => setCorTime(valor)}
            />
            <Button texto='Criar novo time' />
        </form>
    </section>
  )
}