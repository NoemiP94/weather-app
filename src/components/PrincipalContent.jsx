import { Col, Container, Row } from 'react-bootstrap'

const PrincipalContent = (props) => {
  return (
    <Container className="text-center">
      <h1>{props.weatherDetails.name}</h1>
      <Row className="bg-primary mx-3 p-5 rounded-3 my-3 border border-info">
        <Col>{/* <h2>{props.weatherDetails.main.feels_like}°</h2> */}</Col>
        <Col>
          {/* <div className={props.weatherDetails.weather.icon}></div> */}
        </Col>
      </Row>
    </Container>
  )
}

export default PrincipalContent
