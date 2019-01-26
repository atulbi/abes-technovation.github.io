import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './../../components/Main/Main.css';
import './Event.css';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Info from './Info/Info';
import Aux from './../../Hoc/Aux';

const styles = {
    timer: {
        fontFamily: "'Kaushan Script', cursive",
        fontSize: 22,
    },
    header: {
        fontSize: 56,
        fontFamily: "'ZCOOL QingKe HuangYou', cursive"
    },
    hr: {
        width: '20%',
        borderBottom: '2px solid #ffffff',
        marginBottom: '20px',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    info: {
        fontSize: 16,
        padding: '0% 25%',
        marginBottom: '25%',
    },
};

class Event extends Component {


    render() {

        const days = 16, hours = 5, min = 45, sec = 12;
        const { classes } = this.props;
        return (
            <Aux>
                <div className='Container EventPageBackground'>
                    <div className='Wrapper'>
                        <h1 className={classes.timer}>{days} Days . {hours} Hours . {min} Minutes . {sec} Seconds</h1>
                        <hr className={classes.hr} />
                        <h1 className={classes.header}>Web Development BootCamp</h1>
                        <p className={classes.info}>There will be details about the event .
                        Anim minim proident laborum aliqua pariatur enim. Occaecat cupidatat labore laborum aliqua.
                    </p>
                        <IconButton color="inherit" aria-label="Explore More" fontSize='large'>
                            <KeyboardArrowDown />
                        </IconButton>
                    </div>
                </div>
                <Info></Info>
            </Aux>
        );
    }
}

export default withStyles(styles)(Event);