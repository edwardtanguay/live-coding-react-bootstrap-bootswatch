import { Table } from 'react-bootstrap';

export const Customers = ({ customers }) => {
	return (
		<>
			<h2>Customers</h2>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Company</th>
					</tr>
				</thead>
				<tbody>
					{customers.slice(0,10).map((cust, index) => {
						return (
							<tr key={index}>
								<td>{cust.customerID}</td>
								<td>{cust.contactName.split(' ')[0]}</td>
								<td>{cust.contactName.split(' ')[1]}</td>
								<td>{cust.companyName}</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
};
