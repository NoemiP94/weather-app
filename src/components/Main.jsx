import PrincipalContent from './PrincipalContent'
import NextDays from './NextDays'
import OtherInfo from './OtherInfo'
import { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

const Main = () => {
  const apiKey = '14165eda3c1a506e96bbe2333942e2c5'
  const [selectedCity, setSelectedCity] = useState('')
  const [weatherDetails, setWeatherDetails] = useState({})

  const fetchWeatherDetails = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.91&appid=' +
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
  }, [])

  return (
    <div>
      <Container className="my-3">
        <Row className="justify-content-center">
          <Col xs={6} md={4}>
            <Form.Label className="fw-bold">Scegli una città:</Form.Label>
            <Form.Select
              aria-label="Scegli una città"
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value)
              }}
            >
              {console.log(selectedCity)}
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
      <div>
        <PrincipalContent weatherDetails={weatherDetails} />
        <NextDays weatherDetails={weatherDetails} />
        <OtherInfo weatherDetails={weatherDetails} />
      </div>
    </div>
  )
}

export default Main
