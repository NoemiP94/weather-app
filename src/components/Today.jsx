import { Col, Container, Row } from 'react-bootstrap'
import { CloudSunFill } from 'react-bootstrap-icons'

const Today = () => {
  return (
    <Container className="text-center">
      <h3 className="mt-4 mb-3">Le previsioni di oggi</h3>
      <Row className="mx-3  rounded-3 mb-3 justify-content-evenly">
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">12 AM</p>
            <CloudSunFill className="fs-4" />
            <p className="mt-2">21 °</p>
          </div>
        </Col>
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">12 AM</p>
            <CloudSunFill className="fs-4" />
            <p className="mt-2">21 °</p>
          </div>
        </Col>
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">12 AM</p>
            <CloudSunFill className="fs-4" />
            <p className="mt-2">21 °</p>
          </div>
        </Col>
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">12 AM</p>
            <CloudSunFill className="fs-4" />
            <p className="mt-2">21 °</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Today
