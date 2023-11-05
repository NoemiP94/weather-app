import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const CustomNav = () => {
  return (
    <Navbar expand="lg" className="main-color">
      <Container>
        <Navbar.Brand className="fw-bold text-light">Weather App</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default CustomNav
