import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNav from './components/CustomNav'
import Main from './components/Main'
import CustomFooter from './components/CustomFooter'

function App() {
  return (
    <div data-bs-theme="dark" className="bg-dark text-light">
      <CustomNav />
      <Main />
      <CustomFooter />
    </div>
  )
}

export default App
