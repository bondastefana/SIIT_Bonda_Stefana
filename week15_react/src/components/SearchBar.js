import './SearchBar.css';
import { Container, Row, Col } from 'react-bootstrap';

const SearchBar = (props) => {
	/* hideOutOfStock will be called and executed (parent <App /> where it is defined) 
	each time the user will perfom a click event on the checkbox. */
	const { hideOutOfStock, filterItems } = props;

	return (
		<Container className="search-container">
			<Row>
				<Col md={4}>
					<input className="search-box" type="text" placeholder="Search..." onKeyUp={filterItems} />
				</Col>
				<Col md={8}>
					<input className="checkbox" type="checkbox" name="stock" onClick={hideOutOfStock} />
					<label htmlFor="stock">Only show products in stock</label>
				</Col>
			</Row>
		</Container>
	);
};

export default SearchBar;
