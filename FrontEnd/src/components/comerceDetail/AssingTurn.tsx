import { Button, Card, Container, Row, Text } from '@nextui-org/react'
import Rectangle from '@/components/svg/rectangle'
import Calendar from 'react-calendar';
import { days, Detail } from '@/types/comerce';
import { FormEventHandler, MouseEvent, useState } from 'react';
import { CSSBUTTONNEXT } from '@/const/constantsUI';
import axios from 'axios';
import { endpoints } from '@/const/endpoints';
import { useGlobalContext } from '@/hooks/useGlobalContext';
import { useRouter } from 'next/router';
import { EmptyModal } from '../Modal/EmptyModal';
import TildeTurn from '../svg/TildeTurn';
import Image from 'next/image';
type AssingTurnT = {
  data: Detail
}
export const AssingTurn = ({ data }: AssingTurnT) => {

  const [day, onChangeDay] = useState(new Date());
  const [note, setNote] = useState("")
  const [requestTurn, setRequestTurn] = useState(false)
  const [selectedLi, setSelectedLi] = useState(0);
  const { user , comerceSelected} = useGlobalContext();
  const router = useRouter();

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

  const yyyy = day.getFullYear();
  let mm = (day.getMonth() + 1).toString();
  let dd = day.getDate().toString();

  if (parseInt(dd) < 10) dd = '0' + dd;
  if (parseInt(mm) < 10) mm = '0' + mm;
  const formatteDay = `${yyyy}-${mm}-${dd}`;
  const hour = ('0' + selectedLi).slice(-2) + ":00";

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    try {
      const requestTurn = await axios.post(`${endpoints.base}/api/turno/pedir`, {
        "hora": hour,
        "fecha": formatteDay,
        "servicio": data.rubro,
        "name": user.data.name,
        "lastName": user.data.name,
        "email": user.data.email,
        "negocio": router.query.index,
        "cliente": user.data._id,
      })
      // The backend didnt respond anything when a client recieve a petition
      setRequestTurn(true)
    } catch (error) {
      console.log(error)
    }
  }
  const handleListClick = (hour: string, index: number) => {
    setSelectedLi(index)
  }
  const okHandler = () => {
    router.push("/search/freesearch/"+comerceSelected?.rubro)
    setRequestTurn(false)
  }
  // const img = user.data.fotos[0].data
  // const img = "https://res.cloudinary.com/dltjb3yhc/image/upload/v1677870387/rwzqqitvcap7wquaxwl1.png"
  // console.log(img)
  const myLoader = ({ src, width, quality }:  any)  => {
    return `https://res.cloudinary.com/dltjb3yhc/image/upload/v1677870387/rwzqqitvcap7wquaxwl1.png`
  }
  return (
    <form onSubmit={handleSubmit}>
      <Container css={{ padding: "10px" }}>
        <EmptyModal
          visible={requestTurn}
          closeHandler={() => setRequestTurn(false)}
          header={<TildeTurn />}
          body={<>
            <Text css={{ fontSize: "20px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>
              ¡Genial, tu turno fue solicitado!
            </Text>
            <Text css={{ fontSize: "16px", fontFamily: "DM Sans", color: "#000000", fontWeight: "700", textAlign: "center" }}>
              El día {formatteDay} a las {hour} hs
            </Text>
            <Text css={{ fontSize: "12px", fontFamily: "DM Sans", color: "#000000", fontWeight: "400", textAlign: "center" }}>
              En las 48 hs previas a tu turno recibirás un correo de recordatorio para confirmarlo.
              <br></br>
              Es obligatorio confirmar el turno, en caso de no hacerlo el mismo será descartado.</Text>
          </>}
          footer={<Button css={CSSBUTTONNEXT} onPress={okHandler}>Entendido</Button>}
        />
        <Card >
          <Card.Body>
            <Row justify='space-between'>
              <Text size={20}>{data.registeredName}</Text>
              <Text size={10}>0.7 km</Text>
            </Row>
            
            <Image
      loader={myLoader}
      src="me.png"
      alt="Picture of the author"
      width={400}
      height={200}
    />


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
