import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type Props = {
    title: string
    menu: { name: string, href: string }[]
}

export default function NavMenu(props : Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                endIcon={<img src="./Images/icons/down-arrow.svg" alt="dropdown arrow" />}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='!text-[16px]/[16px] !font-normal !tracking-[-0.96px] !capitalize !text-[#999999] hover:!text-[#169B4C] !bg-transparent !p-0'
            >
                {props.title}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                list: {
                    'aria-labelledby': 'basic-button',
                },
                }}
            >    
            {
                props.menu && props.menu.length > 0 && props.menu.map((item, index) => (
                    <a href={item.href} className="">
                        <MenuItem 
                            onClick={handleClose} 
                            key={index}
                            className='!text-[16px]/[16px] !font-normal !tracking-[-0.96px] !capitalize !text-[#999999] hover:!text-white transition-all ease-linear duration-150 hover:!bg-[#169B4C]'
                        >{item.name}</MenuItem>
                    </a>
                ))
            }
            </Menu>
        </div>
    );
}
