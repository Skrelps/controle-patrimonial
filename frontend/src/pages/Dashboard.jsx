import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  // Criando o estado para guardar as movimentações reais (começa como uma lista vazia)
  const [movimentacoes, setMovimentacoes] = useState([]);

  // Esse useEffect vai estar rodando automaticamente assim que a tela abrir
  useEffect(() => {
    const carregarMovimentacoes = async () => {
      try {
        // O axios vai estar indo lá no backend buscar os dados
        const resposta = await axios.get('http://localhost:3000/dashboard');
        
        // Salvando os dados reais no estado da tela
        setMovimentacoes(resposta.data.ultimasMovimentacoes  ||  []);
      } catch (erro) {
        console.error("Erro ao buscar os dados:", erro);
      }
    };

    carregarMovimentacoes();
  }, []);

  return (
    <div className="container-fluid pt-4">
      
      <h3 className="text-center mb-5 fw-bold" style={{ color: '#333' }}>
        SGP - Controle de Ativos e Inventário Digital
      </h3>

      {/* --- SEÇÃO DOS CARDS (Resumo numérico) --- */}
      <div className="row mb-5 text-center">
        
        <div className="col-md-4">
          <h6 className="mb-2">Total de Bens</h6>
          <div className="card border-0 shadow-sm" style={{ backgroundColor: '#D9D9D9', height: '120px', borderRadius: '10px' }}>
            <div className="card-body d-flex align-items-center justify-content-center">
               <h2 className="m-0">--</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <h6 className="mb-2">Empréstimos Ativos</h6>
          <div className="card border-0 shadow-sm" style={{ backgroundColor: '#D9D9D9', height: '120px', borderRadius: '10px' }}>
            <div className="card-body d-flex align-items-center justify-content-center">
               <h2 className="m-0">--</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <h6 className="mb-2">Manutenções Pendentes</h6>
          <div className="card border-0 shadow-sm" style={{ backgroundColor: '#D9D9D9', height: '120px', borderRadius: '10px' }}>
            <div className="card-body d-flex align-items-center justify-content-center">
               <h2 className="m-0">--</h2>
            </div>
          </div>
        </div>

      </div>

      {/* --- SEÇÃO DA TABELA (Dados Reais) --- */}
      <div className="mt-5">
        <h5 className="fw-bold mb-3">Movimentações Recentes</h5>
        
        <div className="p-4 shadow-sm" style={{ backgroundColor: '#D9D9D9', borderRadius: '10px' }}>
          <table className="table table-borderless bg-transparent mb-0">
            <thead>
              <tr>
                <th>Data</th>
                <th>Patrimônio</th>
                <th>Usuário</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/*  o map vai criar uma linha pra cada item */}
              {movimentacoes.length > 0 ? (
                movimentacoes.map((item) => (
                  <tr key={item.id}>
                    <td>{new Date(item.createdAt).toLocaleString('pt-BR')}</td>
                    <td>{item.patrimonio?.nome}</td>
                    <td>{item.usuario?.nome}</td>
                    <td>{item.tipo}</td>
                  </tr>
                ))
              ) : (
                /* Caso o banco não devolva nada ou ainda esteja carregando */
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    Nenhuma movimentação encontrada ou aguardando conexão.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;