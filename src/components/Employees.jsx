import { Carousel } from 'react-bootstrap';

export const Employees = ({ employees }) => {
	return (
		<>
			<h2>Employees</h2>
			<p>This is the employees page.</p>
			<Carousel style={{'height': '300px'}}>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="images/employees/employee_1.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Second slide&bg=282c34"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="holder.js/800x400?text=Third slide&bg=20232a"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<ul>
				{employees.map((emp, index) => {
					return (
						<li key={index}>
							{emp.firstName} {emp.lastName}
						</li>
					);
				})}
			</ul>
		</>
	);
};
