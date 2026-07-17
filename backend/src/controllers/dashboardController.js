const prisma = require('../database/prisma')

const dashboard = async (req, res) => {
  try {

    const totalPatrimonios = await prisma.patrimonio.count()

    const emprestados = await prisma.patrimonio.count({
      where: { status: 'Emprestado' }
    })

    const disponiveis = await prisma.patrimonio.count({
      where: { status: 'Disponível' }
    })

    const totalUsuarios = await prisma.usuario.count()

    const totalEmprestimos = await prisma.movimentacao.count({
        where: {
            tipo: 'EMPRESTIMO'
        }
    })

    const totalDevolucoes = await prisma.movimentacao.count({
        where: {
            tipo: 'DEVOLUCAO'
        }
    })

    const ultimasMovimentacoes = await prisma.movimentacao.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        patrimonio: true,
        usuario: true
      }
    })

    return res.json({
      totalPatrimonios,
      emprestados,
      disponiveis,
      totalUsuarios,
      totalEmprestimos,
      totalDevolucoes,
      ultimasMovimentacoes
    })

  } catch (error) {
    return res.status(500).json({
      erro: error.message
    })
  }
}

module.exports = { dashboard }