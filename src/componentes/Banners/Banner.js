import "./Banner.css"

import React from 'react'

export default function Banner() {
    return (
    <header className="banner">
      <section>
        <img src="/imagens/logo.png" alt="" className='banner-logo'/>
      </section>
      <section>
        <h1>Critical Role</h1>
      </section>
        <section>
          <ul>
              <li>
                  <a href="/" target="_blank">
                      <img src="/imagens/home.png" alt="" className="nav-icons" />
                  </a>
              </li>
              <li>
                  <a href="/" target="_blank">
                      <img src="/imagens/avatar.png" alt="" className="nav-icons" />
                  </a>
              </li>
              <li>
                  <a href="/" target="_blank">
                      <img src="/imagens/team.png" alt="" className="nav-icons" />
                  </a>
              </li>
          </ul>
      </section>
    </header>
  )
}
