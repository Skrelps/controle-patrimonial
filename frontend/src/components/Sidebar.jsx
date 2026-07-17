import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

  function sair() {

    localStorage.removeItem('token')

    window.location.href = '/login'

  }

  return (

    <div
      className="d-flex flex-column p-3 text-white"
      style={{
        width: '260px',
        backgroundColor: '#002F6C',
        fontFamily: 'Inter, sans-serif'
      }}
    >

      <div className="mb-5 mt-3 ms-2">

        <span className="fs-4 fw-bold">
          SGP
        </span>

      </div>

      <ul className="nav nav-pills flex-column gap-4 mt-4">

        <li className="nav-item">

          <Link
            to="/dashboard"
            className="nav-link text-white px-3"
          >
            Dashboard
          </Link>

        </li>

        <li>

          <Link
            to="/cadastrar-bem"
            className="nav-link text-white px-3"
          >
            Cadastrar Bem
          </Link>

        </li>

        <li>

          <Link
            to="/movimentacoes"
            className="nav-link text-white px-3"
          >
            Movimentações
          </Link>

        </li>

        <li>

          <Link
            to="/auditoria"
            className="nav-link text-white px-3"
          >
            Logs de Auditoria
          </Link>

        </li>

      </ul>

      <div className="mt-auto">

        <button
          className="btn btn-outline-light w-100"
          onClick={sair}
        >
          Sair
        </button>

      </div>

    </div>

  )

}

export default Sidebar