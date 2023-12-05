//import Button from 'react-bootstrap/Amikell';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Col from 'react-bootstrap/Col';

export default function Termek(props) {

    return (
        //<Col >
            <Card className='col-lg-3' style={{ width: '20rem' }}>
                <Card.Title className='cim'>{props.cim}</Card.Title>
                <Card.Body>
                    <Card.Img variant="top" src={props.src} />
                    <Card.Text className='leiras'>{props.leiras}</Card.Text>
                    <Card.Text className='ar'>{props.ar}</Card.Text>
                    <Button variant="primary">Kosárba</Button>
                </Card.Body>
            </Card>
        //</Col>
    )

}