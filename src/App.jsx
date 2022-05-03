import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Container>
       <h1>Company Site</h1> 
       <Button className="me-1">Employees</Button>
       <Button className="btn-success">Customers</Button>
       </Container>
    </div>
  )
}

export default App
