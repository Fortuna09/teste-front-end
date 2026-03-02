import { Header } from './components/Header';
import { Banner } from './components/Banner';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      {/* O restante do conteúdo virá aqui depois */}
      <main style={{ height: '100vh' }}>
        {/* Espaço para a vitrine futuramente */}
      </main>
    </div>
  );
}

export default App;