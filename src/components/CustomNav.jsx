import { Container, Navbar } from 'react-bootstrap'

const CustomNav = () => {
  return (
    <Navbar expand="lg" className="bg-primary-subtle">
      <Container>
        <Navbar.Brand className="fw-bold">Weather App</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default CustomNav
