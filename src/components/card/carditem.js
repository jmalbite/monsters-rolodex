import React from "react";
import { Paper } from "@material-ui/core";
import useStyles from "../card/card-item-style";

const CardItem = (props) => {
	const classes = useStyles(props);
	return (
		<Paper className={classes.paper} elevation={3} variant='outlined'>
			<img
				className={classes.img}
				src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
				alt='monster'
			/>
			<h2>{props.name}</h2>
		</Paper>
	);
};

export default CardItem;
