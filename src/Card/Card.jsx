import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import Image from 'next/image';
import clsx from 'clsx';

const CardComponent = ({ src, title, description, link }) => {
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, 'flip-card')}>
            <CardContent className='flip-card-inner'>
                <div className='flip-card-front'>
                    <Image
                        src={src}
                        alt={title}
                        width={300}
                        height={300}
                    />
                </div>
                <div className='flip-card-back'>
                    <span className='card-title'>
                        {title}
                    </span>
                </div>
            </CardContent>
        </Card>)

}
export default CardComponent;