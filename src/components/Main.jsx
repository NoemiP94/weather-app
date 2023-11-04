import PrincipalContent from './PrincipalContent'
import NextDays from './NextDays'
import OtherInfo from './OtherInfo'
import { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const Main = () => {
  const apiKey = '14165eda3c1a506e96bbe2333942e2c5'
  const [selectedCity, setSelectedCity] = useState({
    selected: 'London',
  })
  const [weatherDetails, setWeatherDetails] = useState({})

  const fetchWeatherDetails = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?q=' +
        selectedCity.selected +
        '&appid=' +
        apiKey +
        '&units=metric'
    )
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((data) => {
        console.log('Dati della fetch', data)
        setWeatherDetails(data)
      })
      .catch((err) => {
        console.log('Errore', err)
      })
  }

  useEffect(() => {
    fetchWeatherDetails()
  }, [selectedCity])

  return (
    <div className="flex-grow-1">
      <Container className="my-3">
        <Row className="justify-content-center">
          <Col xs={6} md={4}>
            <Form.Label className="fw-bold">Scegli una città:</Form.Label>
            <Form.Select
              aria-label="Scegli una città"
              value={selectedCity.selected}
              onChange={(e) => {
                setSelectedCity({
                  selected: e.target.value,
                })
              }}
            >
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
            {console.log(selectedCity)}
          </Col>
        </Row>
      </Container>
      <div>
        <PrincipalContent weatherDetails={weatherDetails} />
        <OtherInfo weatherDetails={weatherDetails} />
        <NextDays weatherDetails={weatherDetails} />
      </div>
    </div>
  )
}

export default Main
