export const Employees = ({employees}) => {
	return (
		<>
			<h2>Employees</h2>
			<p>This is the employees page.</p>
			<ul>
				{employees.map((emp, index) => {
					return <li key={index}>{emp.firstName} {emp.lastName}</li>;
				})}
			</ul>
		</>
	);
};
