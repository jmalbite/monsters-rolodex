import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'


const CardItem = ({key, name}) => {
    return (
        <Card className='card-item'>
            <CardContent>
                <Typography variant='body' color='textSecondary'>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardItem;
