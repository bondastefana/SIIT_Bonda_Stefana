import './ProductTable.css';
import { Container, Row, Col } from 'react-bootstrap';

const ProductTable = (props) => {
	return (
		<Container className="table-header">
			<Row>
				<Col md={4}>
					<span className="table-head">Name</span>
				</Col>
				<Col md={8}>
					<span className="table-head">Price</span>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductTable;
