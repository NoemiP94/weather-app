import { Col, Container, Row } from 'react-bootstrap'
import {
  Moisture,
  ThermometerHigh,
  ThermometerLow,
  Wind,
} from 'react-bootstrap-icons'

const OtherInfo = (props) => {
  return (
    <Container className="text-center">
      <h2>Other info</h2>
      <Row className="justify-content-center">
        <Col xs={4} md={3} lg={2} className="rounded-3 mx-3 my-2 cards">
          <div className="py-2">
            <div>
              <ThermometerHigh />
            </div>
            <div className="fw-bold">TEMP MAX</div>
            <div>{props.weatherDetails.list[0].main.temp_max}°</div>
          </div>
        </Col>
        <Col xs={4} md={3} lg={2} className="rounded-3 mx-3 my-2 cards">
          <div className="py-2">
            <div>
              <ThermometerLow />
            </div>
            <div className="fw-bold">TEMP MIN</div>
            <div>{props.weatherDetails.list[0].main.temp_min}°</div>
          </div>
        </Col>
        <Col xs={4} md={3} lg={2} className="rounded-3 mx-3 my-2 cards">
          <div className="py-2">
            <div>
              <Wind />
            </div>
            <div className="fw-bold">WIND</div>
            <div>{props.weatherDetails.list[0].wind.speed}km/h</div>
          </div>
        </Col>
        <Col xs={4} md={3} lg={2} className="rounded-3 mx-3 my-2 cards">
          <div className="py-2">
            <div>
              <Moisture />
            </div>
            <div className="fw-bold">MOISTURE</div>
            <div>{props.weatherDetails.list[0].main.humidity}%</div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OtherInfo
