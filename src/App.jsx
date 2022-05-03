// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.darkly.min.css';
// import './styles/bootstrap.morph.min.css';
// import './styles/bootstrap.quartz.min.css';
import { Container, Button, Card } from 'react-bootstrap';

function App() {
    return (
        <div>
            <Container className="pt-5">
                <h1>Company Site</h1>
                <Button className="me-2">Employees</Button>
                <Button className="btn-success">Customers</Button>
                <Card className="mt-2">
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default App;
