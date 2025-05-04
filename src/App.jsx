import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { PainelLogin } from './hooks-examples/PainelLogin';
import { AreaRestrita } from './hooks-examples/AreaRestrita';

function App() {
  return (
    <AuthProvider>
      <h1>Sistema com Login Simulado</h1>
      <PainelLogin />
      <hr />
      <AreaRestrita />
    </AuthProvider>
  );
}

export default App;
