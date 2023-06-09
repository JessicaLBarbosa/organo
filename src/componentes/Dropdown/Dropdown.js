import './Dropdown.css'

export const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select onChange={evento => props.onChange(evento.target.value)} required={props.obrigatorio} value={props.value}>
        <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}