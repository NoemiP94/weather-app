import { Col, Container, Row } from 'react-bootstrap'
import { CloudSunFill } from 'react-bootstrap-icons'

const NextDays = (props) => {
  return (
    <Container className="text-center">
      <h3 className="mt-4 mb-3">Next days</h3>
      <Row className="mx-3 rounded-3 mb-3 mt-2 justify-content-evenly">
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">{new Date().getDay()}</p>
            <img
              src={
                'https://openweathermap.org/img/w/' +
                props.weatherDetails.list[1].weather[0].icon +
                '.png'
              }
              alt="icon"
            />
            <p className="mt-2">
              {props.weatherDetails.list[1].main.feels_like}°
            </p>
          </div>
        </Col>
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">{new Date().getDay() + 1}</p>
            <img
              src={
                'https://openweathermap.org/img/w/' +
                props.weatherDetails.list[2].weather[0].icon +
                '.png'
              }
              alt="icon"
            />
            <p className="mt-2">
              {props.weatherDetails.list[2].main.feels_like}°
            </p>
          </div>
        </Col>
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">{new Date().getDay() + 2}</p>
            <img
              src={
                'https://openweathermap.org/img/w/' +
                props.weatherDetails.list[3].weather[0].icon +
                '.png'
              }
              alt="icon"
            />
            <p className="mt-2">
              {props.weatherDetails.list[3].main.feels_like}°
            </p>
          </div>
        </Col>
        <Col xs={2} className="bg-secondary rounded-3 border border-light me-2">
          <div className="my-2">
            <p className="mb-2">{new Date().getDay() + 3}</p>
            <img
              src={
                'https://openweathermap.org/img/w/' +
                props.weatherDetails.list[4].weather[0].icon +
                '.png'
              }
              alt="icon"
            />
            <p className="mt-2">
              {props.weatherDetails.list[4].main.feels_like}°
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NextDays
