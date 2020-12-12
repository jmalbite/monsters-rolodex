import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import Slider from "@material-ui/core/Slider";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			employees: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ employees: users }));
	}

	render() {
		const { employees, searchField } = this.state;
		const filteredEmployees = employees.filter((employee) =>
			employee.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className='App'>
				<h1>Monster Rolodex</h1>
				<SearchBox
					onChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList users={filteredEmployees} />
			</div>
		);
	}
}

export default App;
