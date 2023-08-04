import "./Button.css"

import React from 'react'

export default function Button({texto}) {
  return <button className="botao">
      {texto}
  </button>
}
