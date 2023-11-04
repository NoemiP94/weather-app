import { Col, Container, Row } from 'react-bootstrap'
import { CloudSunFill } from 'react-bootstrap-icons'

const NextDays = () => {
  return (
    <Container className="text-center">
      <h3 className="mt-4 mb-3">Next days</h3>
      <Row className="mx-3 rounded-3 mb-3 mt-2 justify-content-evenly">
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">05</p>
            <CloudSunFill className="fs-4" />
            <p className="mt-2">21 °</p>
          </div>
        </Col>
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">06</p>
            <CloudSunFill className="fs-4" />
            <p className="mt-2">21 °</p>
          </div>
        </Col>
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">07</p>
            <CloudSunFill className="fs-4" />
            <p className="mt-2">21 °</p>
          </div>
        </Col>
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">07</p>
            <CloudSunFill className="fs-4" />
            <p className="mt-2">21 °</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NextDays
