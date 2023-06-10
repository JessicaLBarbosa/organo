import './Dropdown.css'

export const Dropdown = ({label, items,  valor, aoAlterado, obrigatorio = false}) => {
  return (<div className="lista-suspensa">
      <label>{label}</label>
      <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
          <option />
          {items.map(item => <option key={item}>{item}</option>)}
      </select>
  </div>)
}