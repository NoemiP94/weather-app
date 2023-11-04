import { Col, Container, Form, Row } from 'react-bootstrap'

const SearchBar = (props) => {
  return (
    <Container className="my-3">
      <Row className="justify-content-center">
        <Col xs={6} md={4}>
          <Form.Label className="fw-bold">Scegli una città:</Form.Label>
          <Form.Select
            aria-label="Scegli una città"
            value={props.selectedCity}
            onChange={(e) => {
              props.setSelectedCity(e.target.value)
            }}
          >
            {console.log(props.selectedCity)}
            <option>London</option>
            <option>Milan</option>
            <option>Cagliari</option>
            <option>Tokyo</option>
            <option>Paris</option>
            <option>Barcelona</option>
            <option>Los Angeles</option>
            <option>New York</option>
            <option>Turin</option>
            <option>Rome</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar
