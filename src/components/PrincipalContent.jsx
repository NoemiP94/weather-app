import { Col, Container, Row } from 'react-bootstrap'

const PrincipalContent = (props) => {
  return (
    <Container className="text-center d-flex flex-column align-items-center">
      <h1 className="fw-bold">{props.weatherDetails.city.name}</h1>
      <Row className="mx-5 p-4 rounded-3 my-3 principal-card align-items-center justify-content-center w-50 ">
        <Col>
          <div>
            <h2 className="fw-bold">Today</h2>
            <h3>{props.weatherDetails.list[0].main.feels_like}°</h3>
          </div>
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
