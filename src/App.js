import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			employees: [],
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ employees: users }));
	}

	render() {
		return (
			<div className='App'>
				<h1>Monster Rolodex</h1>
				<SearchBox />
				<CardList users={this.state.employees} />
			</div>
		);
	}
}

export default App;
