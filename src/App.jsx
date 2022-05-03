import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.darkly.min.css';
// import './styles/bootstrap.morph.min.css';
// import './styles/bootstrap.quartz.min.css';
import { Container, Button, Card } from 'react-bootstrap';
import { Employees } from './components/Employees';
import { Customers } from './components/Customers';

function App() {
	const [mode, setMode] = useState('employees');

	return (
		<div>
			<Container className="pt-5">
				<h1>Company Site</h1>
				<Button onClick={() => setMode('employees')} className="me-2">
					Employees
				</Button>
				<Button
					onClick={() => setMode('customers')}
					className="btn-success"
				>
					Customers
				</Button>
				<Card className="mt-2">
					<Card.Body>
						{mode === 'employees' ? <Employees /> : <Customers />}
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

export default App;
