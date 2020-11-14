import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Card from '../src/Card/Card';

const almohadones = [
    {
        src: '/almohadon1.jpg',
        title: 'Almohadones Mediterráneo',
        description: '',
        link: ''
    },
    {
        src: '/almohadon2.jpg',
        title: 'Almohadón Pluma',
        description: '',
        link: ''
    },
    {
        src: '/almohadon3.jpg',
        title: 'Almohadón Poniente',
        description: `Súper • Soft ⠀⠀⠀⠀⠀⠀⠀⠀⠀
        60 x 60⠀⠀⠀⠀⠀⠀⠀⠀⠀
        Nido de abeja`,
        link: ''
    },
    {
        src: '/almohadon4.jpg',
        title: 'Almohadón Libis',
        description: '',
        link: ''
    },
    {
        src: '/almohadon5.jpg',
        title: 'Almohadón Poniente',
        description: '',
        link: ''
    },
    {
        src: '/almohadon6.jpg',
        title: 'Almohadones Céfiro.',
        description: '',
        link: ''
    },
    {
        src: '/almohadon8.jpg',
        title: 'Almohadón Céfiro',
        description: '',
        link: ''
    },
]
export default function About() {
    return (
        <Container maxWidth="xl">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 20 }}>
                <span className='title'>Almohadones del Estudio</span>
                <div className='card-list'>
                    {almohadones.map((item) => <Card key={item.src} src={item.src} title={item.title} description={item.description} link={item.link}></Card>)}

                </div>
            </div>


        </Container>
    );
}