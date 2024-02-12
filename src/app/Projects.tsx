import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="text-center mb-5">Projects</h2>
                    <Stack gap={2} className="mx-auto">
                            <Card className="mx-auto p-2 card-link" border="dark" style={{ width: '22rem' }} onClick={() => navigate('/projects/reactivities')}>
                                <Card.Body className="text-center">
                                    <Card.Title style={{fontWeight: '600', fontSize: '1.5rem'}}>Reactivities</Card.Title>
                                    <Card.Text>Reactivities is a social-networking application built with .NET Core and React which allows users to create profiles and add or follow events.</Card.Text>
                                </Card.Body>
                            </Card>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}