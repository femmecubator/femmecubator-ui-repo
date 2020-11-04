import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import errorIllustration from './errorIllustration.svg';
import Button from '@material-ui/core/Button';
function iconStyles() {
    return {
        root: {
            margin: "0 auto",
        },
        errorText: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: "700", 
            color: "#400CCC",
            fontSize: "28px",
        },
        normalText: {
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: "400",
            fontSize: '21px',
            marginLeft: '38px'
        },
        successIcon: {
            backgroundColor: "#1E90FF",
            color: "#fff"
        },
        errorIcon: {
            color: "red",
        }
    }
}

function ErrorFallback({ error, resetErrorBoundary }) {
    const classes = makeStyles(iconStyles)();
    return (
        <div className={classes.root}>
            <img src={errorIllustration} alt='errorIllustration' />
            <h2 className={classes.errorText}>We're having trouble loading this page.</h2>
            <p className={classes.normalText}>Try again or do a quick reset by logging out.</p>
            <Button variant="contained" className={classes.successIcon} onClick={resetErrorBoundary}>Try Again</Button>
        </div>
    )
}

export default ErrorFallback;
