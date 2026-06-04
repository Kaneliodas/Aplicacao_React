// src/App.jsx
import './App.css' // Se optar pelo CSS global
import Nome from './nome.jsx';
import Email from './email.jsx';
import Github from './github.jsx';
import Biografia from './bio.jsx';
import Habilidades from './habilidades.jsx';

function App() {
  return (
    <div>
      <h1>Minha Atividade de React</h1>
      <Nome />
      <Email />
      <Github />
      <Biografia />
      <Habilidades />
    </div>
  )
}

export default App