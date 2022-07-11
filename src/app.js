import './styles/app.css'
import Header from './components/header/Header.js'
import Nav from './components/nav/Nav.js'
import Main from './components/main/Main.js'

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  )
}

export default App
