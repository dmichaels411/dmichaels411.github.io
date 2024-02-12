import { Button, Col, Container, Fade, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <Fade in appear>
                        <h3 className="first-transition">Hi there! I'm</h3>
                    </Fade>
                    <Fade in appear>
                        <h1 className="second-transition">David Michaels</h1>
                    </Fade>
                    <Fade in appear>
                        <h2 className="third-transition">I'm a Software Developer</h2>
                    </Fade>
                    <br/>
                    <Fade in appear>
                        <h4 className="fourth-transition">I have experience in PHP, JavaScript, C#, and more.</h4>
                    </Fade>
                    <br/>
                    <Fade in appear>
                        <Link to='/about' className="fifth-transition">
                            <Button variant="dark" size="lg">Get in touch</Button>
                        </Link>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}