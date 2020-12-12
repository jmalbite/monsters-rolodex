import React from "react";
import { TextField } from "@material-ui/core";
import useStyles from "../search-box/search-box-style";

const SearchBox = (props) => {
	const classes = useStyles(props);
	return (
		<form className={classes.root}>
			<TextField
				id='SearchMonster'
				variant='outlined'
				label='Search Monster'
				onChange={props.onChange}
			></TextField>
		</form>
	);
};

export default SearchBox;
