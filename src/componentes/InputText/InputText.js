import './InputText.css'

export const InputText = (props) => {

  const onType = (evento) => {
    props.onChange(evento.target.value)
  }

  return (
    <div className="input-text">
      <label>{props.label}</label>
      <input value={props.value} onChange={onType} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  )
}