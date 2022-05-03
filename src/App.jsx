import { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.darkly.min.css';
// import './styles/bootstrap.morph.min.css';
// import './styles/bootstrap.quartz.min.css';
import { Container, Button, Card } from 'react-bootstrap';
import { Employees } from './components/Employees';
import { Customers } from './components/Customers';

// import employees from './data/employees.json';

function App() {
	const [mode, setMode] = useState('employees');
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/json/employees.json'
			);
			const _employees = await response.json();
			setEmployees(_employees);
		})();
	}, []);

	return (
		<div>
			<Container className="pt-5">
				<h1>Company Site</h1>
				<p>There are {employees.length} employees.</p>
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
						{mode === 'employees' ? (
							<Employees employees={employees} />
						) : (
							<Customers />
						)}
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

export default App;
