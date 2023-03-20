import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/esm/Container"

export default function About () {
    return (
        <Container>
            <Card style={{marginTop:'1rem'}}>
                <Card.Body>
                    <Card.Title as="h1">About Us</Card.Title>
                    <Card.Text>
                        <p>When returning from a spritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spritiual wellness for others back in his hometown. </p>
                        <p>As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired. </p>
                        <p>Monty decided to travel around the world to find peace and happiness</p>
                        <p>Upon his return, he dedicated about 1% of his wealth to open this Mineral SPA to bring joy and spiritual happiness to others</p>
                    </Card.Text>
                    <Card.Img style={{margin:'0 auto', width:'75%'}} variant="bottom" src="hotsprings.jpg" />
                </Card.Body>
            </Card>
        </Container>
    )
}