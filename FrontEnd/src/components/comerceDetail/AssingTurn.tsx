import { Button, Card, Container, Row, Text } from '@nextui-org/react'
import Rectangle from '@/components/svg/rectangle'
import Calendar from 'react-calendar';
import { days, Detail } from '@/types/comerce';
import { FormEventHandler, MouseEvent, useState } from 'react';
import { CSSBUTTONNEXT } from '@/const/constantsUI';
type AssingTurnT = {
  data: Detail
}
export const AssingTurn = ({ data }: AssingTurnT) => {

  const [day, onChangeDay] = useState(new Date());
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

  const [selectedLi, setSelectedLi] = useState(0);
  const handleListClick = (hour: string, index: number) => {
    setSelectedLi(index)
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    const yyyy = day.getFullYear();
    let mm = (day.getMonth() + 1).toString();
    let dd = day.getDate().toString();

    if (parseInt(dd) < 10) dd = '0' + dd;
    if (parseInt(mm) < 10) mm = '0' + mm;
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    const hour = ('0' + selectedLi).slice(-2) + ":00";
    
    console.log(note, formattedToday, hour);
  }
  const [note, setNote] = useState("")
  return (
    <form onSubmit={handleSubmit}>
      <Container css={{ padding: "10px" }}>
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
            <Text size={17} weight={"bold"} css={{ marginBottom: 8 }}>Solicita tu turno</Text>
            <Text size={15} weight={"bold"}>Fecha y hora</Text>
            <div style={{ margin: "10px 25px" }}>
              <Calendar onChange={onChangeDay} value={day} />
            </div>
            <Row className="HoursContainer" css={{ marginBottom: 8 }}>

              <ul className="HoursList" >
                {[...new Array(24)].map((_, index) => {
                  let hora = ('0' + index).slice(-2);
                  return <li key={hora + "00"} className={selectedLi === index ? "selected" : ""} value={hora + ':00'} onClick={(ev) => handleListClick(hora + ':00', index)}>{hora + ':00'}</li>
                })}
              </ul>
            </Row>
            <Text size={15} weight={"bold"} css={{ marginBottom: 8 }}>Nota</Text>
            <textarea style={{ marginBottom: 8 }}
              value={note}
              onChange={(val) => setNote(val.target.value)}
              placeholder='Nota para el comercio. Puedes avisar sobre que tratará tu turno.' className="HoursContainer">

            </textarea >
            <Row justify={"center"}>
              <Button css={{ ...CSSBUTTONNEXT }} type="submit">Solicita turno</Button>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </form>
  )
}
