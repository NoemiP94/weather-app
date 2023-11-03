import { Col, Container, Row } from 'react-bootstrap'

const CustomFooter = () => {
  return (
    <Container fluid className="sticky-bottom bg-primary-subtle">
      <Row className="text-center py-2">
        <Col>
          <p>Weather App {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default CustomFooter
