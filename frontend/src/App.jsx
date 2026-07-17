import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import PrivateRoute from './components/PrivateRoute'
import DashboardResumo from './pages/DashboardResumo'
import Login from './pages/Login'
import CadastrarBem from './pages/CadastrarBem'
import Movimentacoes from "./pages/Movimentacoes";
import LogsAuditoria from "./pages/LogsAuditoria";

function App() {
  
  const token = localStorage.getItem('token')

  return (

    <BrowserRouter>
  
      {!token ? (
  
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
  
      ) : (
  
        <div
          className="d-flex"
          style={{
            minHeight: '100vh',
            backgroundColor: '#FFFFFF'
          }}
        >
  
          <Sidebar />
  
          <div className="flex-grow-1 p-5">
  
            <Routes>
  
              <Route
                path="/"
                element={
                <PrivateRoute>
                  <DashboardResumo />
                </PrivateRoute>
                }
              />
  
              <Route
                path="/dashboard"
                element={
                <PrivateRoute>
                  <DashboardResumo />
                </PrivateRoute>  
                }
              />
  
              <Route
                path="/cadastrar-bem"
                element={
                <PrivateRoute>
                  <CadastrarBem />
                </PrivateRoute>  
                 }
              />
  
              <Route
                path="/movimentacoes"
                element={
                <PrivateRoute>
                  <Movimentacoes />
                </PrivateRoute>
                }
              />
  
              <Route
                path="/auditoria"
                element={
                <PrivateRoute>
                  <LogsAuditoria />
                </PrivateRoute>
                }
              />
  
              <Route
                path="*"
                element={<Navigate to="/dashboard" />}
              />
  
            </Routes>
  
          </div>
  
        </div>
  
      )}
  
    </BrowserRouter>
  
  )
}

export default App