import ProductRow from './ProductRow.js';
import { products } from '../staticData/data.js';
import './ProductCategoryRow.css';
import { Container } from 'react-bootstrap';

const ProductCategoryRow = (props) => {
	const { name, isClicked, searchedItem } = props;

	const displayProducts = () => {
		return products
			.map((productObj, index) => {
				const { name: productName, price, inStock, type } = productObj;

				// We hide the product if there is no stock for that product and the checkbox is clicked.
				// inStock - coming from products data object.
				// isClicked - coming from <SearchBar /> that calls handleClick in the <App /> and triggers re-render due to state changes (from false to true).
				const hideProduct = !inStock && isClicked;

				// We only want to display the Products that are from the right category, not all the products twice + hideProduct variable.
				return name === type && !hideProduct ? (
					<ProductRow key={index} name={productName} price={price} inStock={inStock} />
				) : null;
			})
			.filter((product) => {
				if (!searchedItem) {
					return product;
				} else {
					return product?.props.name.toUpperCase() === searchedItem.toUpperCase();
				}
			});
	};

	return (
		<Container className="product-container">
			<h3 className="product-name">{name}</h3>
			<h5>{displayProducts()}</h5>
		</Container>
	);
};

export default ProductCategoryRow;
