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
        <Col
          xs={4}
          md={3}
          className="bg-secondary rounded-3 border border-light mx-3 my-2"
        >
          <div className="py-2">
            <div>
              <ThermometerHigh />
            </div>
            <div>TEMP MAX</div>
            <div>{props.weatherDetails.main.temp_max}°</div>
          </div>
        </Col>
        <Col
          xs={4}
          md={3}
          className="bg-secondary rounded-3 border border-light mx-3 my-2"
        >
          <div className="py-2">
            <div>
              <ThermometerLow />
            </div>
            <div>TEMP MIN</div>
            <div>{props.weatherDetails.main.temp_min}°</div>
          </div>
        </Col>
        <Col
          xs={4}
          md={3}
          className="bg-secondary rounded-3 border border-light mx-3 my-2"
        >
          <div className="py-2">
            <div>
              <Wind />
            </div>
            <div>WIND</div>
            <div>{props.weatherDetails.wind.speed}km/h</div>
          </div>
        </Col>
        <Col
          xs={4}
          md={3}
          className="bg-secondary rounded-3 border border-light mx-3 my-2"
        >
          <div className="py-2">
            <div>
              <Moisture />
            </div>
            <div>MOISTURE</div>
            <div>{props.weatherDetails.main.humidity}%</div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default OtherInfo
