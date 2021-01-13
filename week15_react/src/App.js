// React imports
import { useState } from 'react';
// Components import
import SearchBar from './components/SearchBar.js';
import ProductTable from './components/ProductTable.js';
import ProductCategoryRow from './components/ProductCategoryRow.js';
// Data imports
import { categoryNames } from './staticData/data.js';
// CSS imports
import './App.css';
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const App = () => {
	// Setting initial state to 'false' (not clicked) for the 1st render.
	const [isClicked, setIsClicked] = useState(false);
	const [searchedItem, setSearchedItem] = useState('');

	/* Setting state to 'true' when it's 'false' and vice-versa (by click event from <SearchBar /> component) => triggers
	re-render of the whole <App /> component with the new value after the state is being set by 'setIsClicked(!isClicked)'. */
	const handleClick = (event) => {
		// Always set the value with the !value not only once with true (because we have check/uncheck).
		setIsClicked(!isClicked);
	};

	const handleSearch = (event) => {
		setSearchedItem(event.target.value);
	};

	const displayCategoryNames = () => {
		return categoryNames.map((category, index) => {
			return <ProductCategoryRow key={index} name={category} isClicked={isClicked} searchedItem={searchedItem} />;
		});
	};

	return (
		<Container>
			<SearchBar hideOutOfStock={handleClick} filterItems={handleSearch} />
			<ProductTable />
			{displayCategoryNames()}
		</Container>
	);
};

export default App;
