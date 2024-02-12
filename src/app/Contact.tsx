import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa6";

export default function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center mb-5">Contact</h2>
                    <FaLinkedin size='5rem' /><a href='https://www.linkedin.com/in/david-michaels/' target='blank'>LinkedIn</a>
                    <a href='https://github.com/dmichaels411' target='blank'>GitHub</a>
                </Col>
            </Row>
        </Container>
    )
}