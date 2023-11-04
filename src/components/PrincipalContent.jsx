import { Col, Container, Row } from 'react-bootstrap'

const PrincipalContent = (props) => {
  return (
    <Container className="text-center">
      <h1>{props.weatherDetails.city.name}</h1>
      <Row className="bg-primary mx-3 p-5 rounded-3 my-3 border border-info">
        <Col>
          <h2>{props.weatherDetails.list[0].main.feels_like}°</h2>
        </Col>
        <Col>
          <div>
            <img
              src={
                'https://openweathermap.org/img/w/' +
                props.weatherDetails.list[0].weather[0].icon +
                '.png'
              }
              alt="icon"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default PrincipalContent
