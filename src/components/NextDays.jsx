import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NextDays = (props) => {
  return (
    <>
      {props.weatherDetails && (
        <Container className="text-center">
          <h3 className="mt-4 mb-3">Next days</h3>
          <Row className="mx-3 rounded-3 mb-3 mt-2 justify-content-evenly">
            <Col xs={2} className="rounded-3 me-2 cards">
              <div className="my-2">
                <p className="mb-2">
                  {props.weatherDetails.list[4].dt_txt.split(' ')[0]}
                </p>
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
            <Col xs={2} className="rounded-3 me-2 cards">
              <div className="my-2">
                <p className="mb-2">
                  {props.weatherDetails.list[12].dt_txt.split(' ')[0]}
                </p>
                <img
                  src={
                    'https://openweathermap.org/img/w/' +
                    props.weatherDetails.list[12].weather[0].icon +
                    '.png'
                  }
                  alt="icon"
                />
                <p className="mt-2">
                  {props.weatherDetails.list[12].main.feels_like}°
                </p>
              </div>
            </Col>
            <Col xs={2} className="rounded-3 me-2 cards">
              <div className="my-2">
                <p className="mb-2">
                  {props.weatherDetails.list[20].dt_txt.split(' ')[0]}
                </p>
                <img
                  src={
                    'https://openweathermap.org/img/w/' +
                    props.weatherDetails.list[20].weather[0].icon +
                    '.png'
                  }
                  alt="icon"
                />
                <p className="mt-2">
                  {props.weatherDetails.list[20].main.feels_like}°
                </p>
              </div>
            </Col>
            <Col xs={2} className="rounded-3 me-2 cards">
              <div className="my-2">
                <p className="mb-2">
                  {props.weatherDetails.list[28].dt_txt.split(' ')[0]}
                </p>
                <img
                  src={
                    'https://openweathermap.org/img/w/' +
                    props.weatherDetails.list[28].weather[0].icon +
                    '.png'
                  }
                  alt="icon"
                />
                <p className="mt-2">
                  {props.weatherDetails.list[28].main.feels_like}°
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default NextDays
