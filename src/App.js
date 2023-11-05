import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNav from './components/CustomNav'
import Main from './components/Main'
import CustomFooter from './components/CustomFooter'

function App() {
  return (
    <div className="background h-100 d-flex flex-column main-height">
      <CustomNav />
      <Main />
      <CustomFooter />
    </div>
  )
}

export default App
