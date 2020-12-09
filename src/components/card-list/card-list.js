import { Grid, Paper } from '@material-ui/core';
import React from 'react'
import useStyles from '../card-list/mui-card-list'
//import '../card-list/card-list-style.css'
import CardItem from '../card/carditem'

const CardList = ( props ) => {
  const classes = useStyles(props);
    return (
      <div classes={classes.root}>
        <Grid container spacing='3'>
          {props.users.map(employee =>
            <Grid item xs='6' sm='3'>
              <Paper className={classes.paper}>
                {employee.name}
              </Paper>
            </Grid>           
            )}
        </Grid>
      </div>
    );
}

export default CardList;
