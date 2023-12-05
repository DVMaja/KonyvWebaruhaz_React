//Fimport Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';


import Termek from "./Termek"
import { termekLista } from "../model/TermekekLista"

export default function Termekek() {

    return (

        <div className='row'>
            {termekLista.map((elem, index) => {
                return (<Termek src={elem.kep} cim={elem.cim} leiras={elem.leiras}
                    ar={elem.ar} key={index} index={index} />)
            })}
        </div>

        /* <Row xs="auto" md={4} lg={6}>
            {termekLista.map((elem, index) => {
                return (<Termek src={elem.kep} cim={elem.cim} leiras={elem.leiras}
                    ar={elem.ar} key={index} index={index} />)
            })}
        </Row> */
    )
}