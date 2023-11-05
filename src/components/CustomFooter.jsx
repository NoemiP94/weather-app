import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CustomFooter = () => {
  return (
    <Container fluid className="sticky-bottom main-color">
      <Row className="text-center py-3">
        <Col>
          <p>Weather App {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CustomFooter
