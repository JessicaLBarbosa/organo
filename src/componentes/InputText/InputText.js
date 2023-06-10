import './InputText.css'

export const InputText = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
  return (<div className='campo-texto'>
      <label>{label}</label>
      <input value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
  </div>)
}