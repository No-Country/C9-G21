import { Button, Card, Container, Row, Text } from '@nextui-org/react'
import Rectangle from '@/components/svg/rectangle'
import Calendar from 'react-calendar';
import { days, Detail } from '@/types/comerce';
import { useState } from 'react';
import { CSSBUTTONNEXT } from '@/const/constantsUI';
type AssingTurnT = {
  data: Detail
}
export const AssingTurn = ({ data }: AssingTurnT) => {

  const [value, onChange] = useState(new Date());
  const activeAvail = data.availability.filter((avail, index) => {
    const day = Object.keys(avail)[0]
    return avail[day].isActive
  })
  const startAvail = activeAvail[0]
  const endAvail = activeAvail[activeAvail.length - 1]
  const weekDay = {
    monday: "lunes",
    tuesday: "martes",
    wednesday: "miércoles",
    thursday: "jueves",
    friday: "viernes",
    saturday: "sábado",
    sunday: "domingo"
  };
  const startDay = Object.keys(startAvail)[0] as days
  const endDay = Object.keys(endAvail)[0] as days

  const horas = [];
  for (let i = 0; i < 24; i++) {
    let hora = ('0' + i).slice(-2);
    horas.push(hora + ':00');
  }

  return (
    <Container css={{padding:"10px"}}>
      <Card >
        <Card.Body>
          <Row justify='space-between'>
            <Text size={20}>{data.registeredName}</Text>
            <Text size={10}>0.7 km</Text>
          </Row>
          <Rectangle width={300} height={300}></Rectangle>
          <Text>
            {data.descripcion}
          </Text>
          <Row>
            <Text weight={"bold"} css={{ paddingRight: 5 }}>Dirección: </Text>
            <Text>
              {data.city + " " + data.address}
            </Text>
          </Row>
          <Row>
            <Text >
              <span style={{ fontWeight: "bold" }}>
                Horario de atención:
              </span>
              <span>
                {` ${weekDay[startDay]} a ${weekDay[endDay]}, ${endAvail[endDay].horaInicio} ${endAvail[endDay].horaFinal}`}
              </span>
            </Text>

          </Row>
          <Text size={17} weight={"bold"} css={{marginBottom: 8}}>Solicita tu turno</Text>
          <Text size={15} weight={"bold"}>Fecha y hora</Text>
          <div style={{ margin: "10px 25px" }}>
            <Calendar onChange={onChange} value={value} />
          </div>
          <Row className="HoursContainer" css={{marginBottom: 8}}>

            <ul className="HoursList">
              {[...new Array(24)].map((_, i) => {
                console.log([new Array(24)].length)
                let hora = ('0' + i).slice(-2);
                return <li key={hora + "00"}>{hora + ':00'}</li>
              })}
            </ul>
          </Row>
          <Text size={15} weight={"bold"} css={{marginBottom: 8}}>Nota</Text>
          <textarea style={{marginBottom: 8}} placeholder='Nota para el comercio. Puedes avisar sobre que tratará tu turno.' className="HoursContainer">
           
          </textarea >
          <Row justify={"center"}>
            <Button css={{...CSSBUTTONNEXT}}>Solicita turno</Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}
