import * as React from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Abc from 'view/components/Applicationcollection/abc';
import Popper from '@mui/material/Popper';
import Link from 'next/link';


const options = [
    'Facility Attempt Report',
    'Provider Attempt Report',
    'Reports',
    'Mass Upload Attemp',
    
];

export default function ApptrackerOption() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div style={{ margin: '20px 0' }}>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                {/* <Link href={selectedIndex == 1 ? '/provider_source_registration' : ''}> */}
                <Button
                    onClick={handleClick}
                    href={selectedIndex == 0 ? '/apptracker/applicationcollection/FacilityAttemptReport' : selectedIndex==1 ? '/apptracker/applicationcollection/ProviderAttemptReport' :  selectedIndex==2 ? '/apptracker/applicationcollection/OneSourceReport' :  selectedIndex==3 ? '/apptracker/applicationcollection/ShowATTEMPTTablePage' :''}
                    // target={selectedIndex == 0 ? '_blank' : ''}
                    sx={{ borderRadius: 'unset', borderRight: '1px solid #ddd' }}
                >
                    {options[selectedIndex]}
                </Button>
                {/* </Link> */}
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    sx={{ borderRadius: 'unset' }}
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>














            
        </div>
    
    
    
    
    
    );
}
