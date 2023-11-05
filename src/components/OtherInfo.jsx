import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const OtherInfo = (props) => {
  return (
    <>
      {props.weatherDetails && (
        <Container className="text-center">
          <h2>Other info</h2>
          <Row className="justify-content-center">
            <Col xs={4} md={3} lg={2} className="rounded-3 mx-3 my-2 cards">
              <div className="py-2">
                <div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVR4nO2ZMUrEQBiFX+N6gpTWQtTK0om2XsTjKIYVvYMseABX8QQZJEgGEryBgrFVnky2SFiIaxJh/8nsB3+V5n0zL5OBABtGRprnO9rks8QUZTVZcfecve7ClfCJyd+0KdicxOTv9hmko00+Ww7fmFtIJzFF2SqQFR+Qjm5f/WowFgFGYHMgBW8ExKJ9EaDrFaLrAmLRvgjQ9QrRdQGxaNcFuFSNtqoEZ09sDqTgjYBY6ItA4HqFAtcFxEJfBALXKxS4LiAWuirAU2wzwvUqASpcMcQE4sIrPK4MX0s8iJKgws2fw9cSU0iAxzhghO8eAl88wp6ElzbuHL6eCwkCL70FFFIJ/f8csAOlhB0oBwis/4fHGCp0OWAHztedHzzBfnUk9jlGFUJIoLoedF/9GFJgiAkjzDuEv+chtiAJWgmF6a91WjyLxYVvYq8H9gtrT5jqG7GY1L6wYjq/Af/LDyNq3nB56uLAAAAAAElFTkSuQmCC"
                    alt="thermomether"
                  />
                </div>
                <div className="fw-bold">TEMP MAX</div>
                <div>{props.weatherDetails.list[0].main.temp_max}°</div>
              </div>
            </Col>
            <Col xs={4} md={3} lg={2} className="rounded-3 mx-3 my-2 cards">
              <div className="py-2">
                <div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVR4nO2ZMUrEQBiFX+N6gpTWQtTK0om2XsTjKIYVvYMseABX8QQZJEgGEryBgrFVnky2SFiIaxJh/8nsB3+V5n0zL5OBABtGRprnO9rks8QUZTVZcfecve7ClfCJyd+0KdicxOTv9hmko00+Ww7fmFtIJzFF2SqQFR+Qjm5f/WowFgFGYHMgBW8ExKJ9EaDrFaLrAmLRvgjQ9QrRdQGxaNcFuFSNtqoEZ09sDqTgjYBY6ItA4HqFAtcFxEJfBALXKxS4LiAWuirAU2wzwvUqASpcMcQE4sIrPK4MX0s8iJKgws2fw9cSU0iAxzhghO8eAl88wp6ElzbuHL6eCwkCL70FFFIJ/f8csAOlhB0oBwis/4fHGCp0OWAHztedHzzBfnUk9jlGFUJIoLoedF/9GFJgiAkjzDuEv+chtiAJWgmF6a91WjyLxYVvYq8H9gtrT5jqG7GY1L6wYjq/Af/LDyNq3nB56uLAAAAAAElFTkSuQmCC"
                    alt="thermomether"
                  />
                </div>
                <div className="fw-bold">TEMP MIN</div>
                <div>{props.weatherDetails.list[0].main.temp_min}°</div>
              </div>
            </Col>
            <Col xs={4} md={3} lg={2} className="rounded-3 mx-3 my-2 cards">
              <div className="py-2">
                <div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD60lEQVR4nO1ZW4gcVRC9m6j4QBQRYnCdrupZN0QQ0SCIQoIgCv74FvFDUOMrAR8ooiCsDxAlRo3bVe0YJR+ihkWJCj4+/MyHIISAfuhH0B+juEl2uqpncA165c7srj09r55NT2YG50D93Vu3qm+97mljxhhjiDFj13gcXYWBPoGsrwDry8iyFYKqZ4YdPuvdwPoTstpWAizfFGbjK8yw4ZI5exqy7G1neMqJ48i63QwNrJ0A1k+ajCX5B0kOI+nRlo4E8oAZBkAoD6UMryDJs9MlOX95jUeyEVn3NDhAsuiH0cXDEDq//hceGhW5sqndehc62HATstcMEh7ptUmDfJZHuu2BRLgBy5/eGwvnmkFhMqxcCKxaDx392dtjT++2B0i2pPLhOjNIuDj2Kbq3UIrXZ1m/bsdvZ6XCaKsZJawv2TNTSX+/GSVAIJuHKoR6BZB+3FBKS8fOMaMCj+ThVFf+0IwCgKMNQPpeKnmrOBtN536Yq+VA8j2yHspDgHS+5ZjBfag+k7vL5yHL31mGstUKkCwiyTbTD7hG1G74ykfkK4/jy00/AWF8GZC8hqylHCRE1heQo/tG4kEzxv8SEFQ9JDnYz8qTsTr9hazHgOR3JPkSWB/NNGoj6YuDNh7bOqXi2A0zZ9e2dcAL5ZZBG4rdhPQzN8V2CCPZDCwPDlrQcUkku5D0xxaOfOo4JzMSsHYCWe9IjyFA+pgZJXgkG5NOAGl5JbFxt64rcNnvVbwgvsB9oZPlBIR6Z2M+yDaDLDtOsDrMI+nbJ2U8sHYimRNA8oV7FUkuZY5VfZJb++0DsryZuIHDBkk+yq1Wsxx3/FA/HQCKn0qcGRvXGIoUXe0e1L0IcHzD0rPw25QjhxxL1y8HkPT5ZCLnQ+g2PxFv67hnzq51CeixPj65057Ry3FutEjkwHcmD2x4d/5sx4UmFAed1gPJ04mwez/rOV64AEtz0vLenbk4UDdK9zd0yk5rWV5vyJ1Abup6wIxdgyRfJ/f19IOkRhd2aN/JvzFA8kEnXcWgPOXIXEwkYycnahRkc7HZ10PtXfKc5GCS618xnuLrU8qf7KbWZ3mmRSXb54fxje6MGu04G027URpZfkmV7D/8UrWQyf6pXZXJVPc7sHx1W2bsKRjI7ch6JPH1F4tUvSiLbmR9ZxWNs+yHco3JjPoNHGhSVmcs4haHvJpduakldCqcOvWZH/xZvdT0Cjf3pK+xTTf+fFPJntqr/qlSuehKcbKSNX71Grm2fTW6V+AGvnoiNZNdbowAludcSJ04F1W5Eii+x70JPJKbXek0eaLw1gK6n3m1n9akL3msd40UqzzGGKYB/wICz8GhYnjjDQAAAABJRU5ErkJggg=="
                    alt="wind"
                  />
                </div>
                <div className="fw-bold">WIND</div>
                <div>{props.weatherDetails.list[0].wind.speed}km/h</div>
              </div>
            </Col>
            <Col xs={4} md={3} lg={2} className="rounded-3 mx-3 my-2 cards">
              <div className="py-2">
                <div>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACy0lEQVR4nO1YwU/TUBx++AcY/wDaJUr0ZCJeNCExnrwIif4FetUD8T/gYEzfzGbbbR6mCHeBA5CNwyImGIxrZxjeQDIPa5cNDEI2WV+L+Zm3MYaZpW9hrq3pl/ySly+v3/u+tq+/tggFCBCgbwgJ+v3BsH4P+RFDE9/P84Je5LBeConfLiC/gcN6gsc60OIELY78hBAu3uSx9qsVgI4ph/wCDusf2+aPQygIYAB5HZygjXWaP6qwNoo8DYABTtDXbANg/QuagHPIl2e/vaHHkFfBCdocQ4C5ni8sq0ZdUgjIn34OtriIcsBRrhv+SrQEDAEqbPr1OnOA6XWzISRlSZqKURFRIUutBVj5oYhzAB4Xqyz61BNzgMVNC2T1SOxEJdRmsfIjyW3HACPJbUcd6oV6Yg6QKViwsGnB5JoJsRyBuEpgat2E1FcLUlsWTOdNiKnOvLBScwzwZKlqq0PXph6oF+qpqwC9qkfzP2zNP17Y60rLlQC0Iqs1uDO1A5cjpUbRcXS11rWOawF6VSgIUAiuAPTlForlms/f9JZ5fDAdt57LbvCxHIGuO/GbvNkQoDWZby/gBj/tRifuFS+71YnPyse80ImDPlDoQyN7vlKD8IeaPzvx4oYJ1+QyXJXLML9B/Bfgwezu8dvlw9ldbwSQVcNiaTRJ9QBC4fbrMR1Tzm7+WXhZrVvMARI5Y5ml0dx+3fnFdetVBVL/oJG9/EzesV8BhQyLSvPD/o/KGjuNUgiMp6u2HyrjS9WO+XY6EgNPvVBPqBuIOfOGlCUZUTF2payxJynk7QulflHO1S9JWTJzPV4+tAswHC8fRrNk5uR8UTH2/6YjnsI31yYZ6gX1EsEPK7fBCVqF9YeVJ8FjreoYAGv7yKvgsP7eOYDO/tjrN1g2MY+Ld5GXwWPt2Sln/ynyA/iwNsoJ+nJzT2hVett4/swHCPCf4TedQZXvL+EKLAAAAABJRU5ErkJggg=="
                    alt="moisture"
                  />
                </div>
                <div className="fw-bold">MOISTURE</div>
                <div>{props.weatherDetails.list[0].main.humidity}%</div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  )
}

export default OtherInfo
