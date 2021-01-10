import './ProductRow.css';
import { Container, Row, Col } from 'react-bootstrap';

const ProductRow = (props) => {
	const { name, price, inStock } = props;
	const getStockStatus = () => {
		return inStock ? { color: 'black' } : { color: 'red' };
	};

	return (
		<Container>
			<Row className="row-container">
				<Col md={4}>
					<span style={getStockStatus()}>{name}</span>
				</Col>
				<Col md={8}>
					<span>{price}</span>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductRow;
