import { Col, Container, Row } from 'react-bootstrap'
import { CloudSunFill } from 'react-bootstrap-icons'

const PrincipalContent = () => {
  return (
    <Container className="text-center">
      <h1>Nome città</h1>
      <Row className="bg-primary mx-3 p-5 rounded-3 my-3 border border-info">
        <Col>
          <h2>Temperatura °</h2>
        </Col>
        <Col>
          <CloudSunFill className="fs-1" />
        </Col>
      </Row>
    </Container>
  )
}

export default PrincipalContent
