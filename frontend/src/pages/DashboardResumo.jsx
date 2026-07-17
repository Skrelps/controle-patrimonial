import { useEffect, useState } from 'react'
import axios from 'axios'
import GraficoPatrimonios from '../components/GraficoPatrimonios'

function DashboardResumo() {

  const [dados, setDados] = useState(null)

  async function carregarDashboard() {

    try {

      const token = localStorage.getItem('token')

      const resposta = await axios.get(
        'http://localhost:3000/dashboard',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setDados(resposta.data)

      console.log(resposta.data)

    } catch (error) {
      console.log(error)
      alert('Erro ao carregar dashboard')
    }
  }

  useEffect(() => {
    carregarDashboard()
  }, [])

  if (!dados) return <p>Carregando...</p>

  return (
  <>
    <div className="row mt-4">

      <div className="col-md-4">
        <div className="card p-3 text-center">
          <h5>Total</h5>
          <h2>{dados.totalPatrimonios}</h2>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3 text-center">
          <h5>Emprestados</h5>
          <h2>{dados.emprestados}</h2>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3 text-center">
          <h5>Disponíveis</h5>
          <h2>{dados.disponiveis}</h2>
        </div>
      </div>

    </div>

    <div className="row mt-3">

        <div className="col-md-4">
            <div className="card p-3 text-center">
                <h5>Usuários</h5>
                <h2>{dados.totalUsuarios}</h2>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card p-3 text-center">
            <h5>Empréstimos</h5>
            <h2>{dados.totalEmprestimos}</h2>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card p-3 text-center">
            <h5>Devoluções</h5>
            <h2>{dados.totalDevolucoes}</h2>
        </div>
    </div>

    </div>

    <div className="d-flex justify-content-center">
      <GraficoPatrimonios dados={dados} />
    </div>

    <div className="card mt-4 shadow">

  <div className="card-header">
    <h5 className="mb-0">Últimas movimentações</h5>
  </div>

  <div className="card-body p-0">

    <table className="table table-hover mb-0">

      <thead>

        <tr>
          <th>Patrimônio</th>
          <th>Tipo</th>
          <th>Usuário</th>
          <th>Observação</th>
          <th>Data</th>
        </tr>

      </thead>

    <tbody>
        {(dados.ultimasMovimentacoes ?? [])
            .slice(0, 5)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((movimentacao) => (
                <tr key={movimentacao.id}>

                <td>{movimentacao.patrimonio.nome}</td>
                <td>{movimentacao.tipo}</td>
                <td>{movimentacao.usuario.nome}</td>
                <td>{movimentacao.observacao}</td>
                <td>
                    {new Date(movimentacao.createdAt).toLocaleString('pt-BR')}
                </td>

            </tr>
        ))}
    </tbody>

    </table>

  </div>

</div>

  </>
)
}

export default DashboardResumo