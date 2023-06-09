import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import InputText from '../InputText'
import './Form.css'

export const Form = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const onSave = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <InputText 
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome..."
          value={nome}
          onChange={value => setNome(value)}
        />
        <InputText 
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo..."
          value={cargo}
          onChange={value => setCargo(value)}
        />
        <InputText 
          label="Imagem" 
          placeholder="Digite o endereço da imagem..."
          value={imagem}
          onChange={value => setImagem(value)}
        />
        <Dropdown 
          obrigatorio={true} 
          label="Time" 
          itens={props.times}
          value={time}
          onChange={value => setTime(value)}
        />
        <Button>
          Criar card
        </Button>
      </form>
    </section>
  )
}