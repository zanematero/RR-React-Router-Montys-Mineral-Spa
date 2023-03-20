import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/esm/Container'

export default function Packages(props){
    const displayPackages = props.packages.map((eachPackage) => <ListGroup.Item>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <Card style={{marginTop:'1rem'}}>
                <Card.Title as="h1">
                    Our Packages
                </Card.Title>
                <ListGroup variant='flush'>
                    {displayPackages}
                </ListGroup>
            </Card>
        </Container>
    )
}
