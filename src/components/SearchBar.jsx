import { Col, Container, Form, Row } from 'react-bootstrap'

const SearchBar = () => {
  return (
    <Container className="my-3">
      <Row className="justify-content-center">
        <Col xs={6} md={4}>
          <Form.Label className="fw-bold">Scegli una città:</Form.Label>
          <Form.Select aria-label="Scegli una città">
            <option>Cagliari</option>
            <option>Milano</option>
            <option>Londra</option>
            <option>Tokyo</option>
            <option>Parigi</option>
            <option>Barcellona</option>
            <option>Los Angeles</option>
            <option>New York</option>
            <option>Torino</option>
            <option>Roma</option>
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar
