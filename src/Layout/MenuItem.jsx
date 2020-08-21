import React, { useState } from 'react'
import Link from 'next/link';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

const MenuItem = (props) => {
    const { name, Icon, items = [], link, classes } = props;
    const isExpandable = items && items.length > 0
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);

    const MenuItemRoot = (
        <ListItem
            key={name}
            classes={{ selected: classes.textSelected }}

        >
            <>
                {!!Icon && (
                    <ListItemIcon >
                        <Icon />
                    </ListItemIcon>
                )}
                <Link href={link}>
                    <ListItemText primary={name} style={{ cursor: 'pointer' }} />
                </Link>
                {isExpandable && !open && <IconExpandMore onClick={handleClick} />}
                {isExpandable && open && <IconExpandLess onClick={handleClick} />}
            </>

        </ListItem>

    )
    const MenuItemChildren = isExpandable ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Divider />
            <List component="div" disablePadding>
                {items.map((item, index) => (
                    <MenuItem {...item} key={index} classes={classes} />
                ))}
            </List>
        </Collapse>
    ) : null
    return (
        <>
            {MenuItemRoot}
            {MenuItemChildren}

        </>)
}

export default MenuItem;