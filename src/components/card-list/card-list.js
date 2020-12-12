import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./card-list-style";
import CardItem from "../card/carditem";

const CardList = (props) => {
	const classes = useStyles(props);
	return (
		<div classes={classes.root}>
			<Grid
				className={classes.gridContainer}
				container
				spacing={3}
				justify='center'
			>
				{props.users.map((employee) => (
					<Grid item xs={12} sm={3} key={employee.id}>
						<CardItem name={employee.name} id={employee.id} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CardList;
