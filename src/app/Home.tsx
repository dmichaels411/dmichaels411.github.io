import { Col, Container, Fade, Row } from "react-bootstrap";

export default function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <Fade in appear>
                        <h3 className="first-transition">Hi there! I'm</h3>
                    </Fade>
                    <Fade in appear>
                        <h1 className="second-transition">David<br></br>Michaels</h1>
                    </Fade>
                    <Fade in appear>
                        <h2 className="third-transition">I'm a Software Developer</h2>
                    </Fade>
                    <Fade in appear>
                        <h4 className="fourth-transition">I have experience in PHP, JavaScript, C#, and more.</h4>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}