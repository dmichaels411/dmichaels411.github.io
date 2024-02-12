import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Reactivities() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center mb-5">Reactivities</h2>
                    <p>
                        Reactivities is a demo social-networking site where users can create activities and follow other profiles.
                    </p>
                    <p>Highlights:</p>
                    <ul>
                        <li>ASP.NET Core API solution</li>
                        <li>Uses Vite to build the front-end React.js application</li>
                        <li>Follows the CQRS and Mediator design patterns</li>
                        <li>Uses Entity Framework and a PostgreSQL database</li>
                        <li>Uses SignalR to implement a real-time commenting feature</li>
                        <li>Semantic UI React is used for styling the pages</li>
                        <li>Front-end uses Axios for API requests</li>
                        <li>Docker, Fly.io, and GitHub are used for deployment</li>
                    </ul>
                    <p className="mt-5 text-center">
                        <Link to='https://dmichaels-reactivities.fly.dev/' target='_blank' className='mx-3'>
                            <Button variant="dark" size="lg">Demo</Button>
                        </Link>
                        <Link to='https://github.com/dmichaels411/Reactivities' target='_blank' className='mx-3'>
                            <Button variant="dark" size="lg">GitHub</Button>
                        </Link>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}