import { Col, Container, Row } from "react-bootstrap";
import myResume from "../assets/David_Michaels_Resume.pdf";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center mb-5">About</h2>
                    <p>
                        I'm David, a programmer in Erie, Pennsylvania. I have four years of professional software development experience working at a local manufacturing company. My work focused on an internal web application which supported all aspects of the business. By the end of my time at the company, the project was fully my responsibility and any issues with this application needed to be quickly resolved as the company depended on this system for production.
                    </p>
                    <p>
                        I'm looking for new opportunities in software development, especially at a larger-sized company, and I'm open to relocating. 
                    </p>
                    <p>
                        <strong>Get in touch:</strong> <a href="mailto:dmichaels411@gmail.com" className="text-dark">dmichaels411@gmail.com</a>
                    </p>
                    <h3 className="my-5 text-center">
                        <a href={myResume} target="_blank" className="text-dark">
                            Download Résumé
                        </a>
                    </h3>
                    <p className="mt-5 text-center">
                        <a href='https://www.linkedin.com/in/david-michaels/' target='blank' className='mx-3'><FaLinkedin color='black' size='5rem' /></a>
                        <a href='https://github.com/dmichaels411' target='blank' className='mx-3'><FaGithub color='black' size='5rem' /></a>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}