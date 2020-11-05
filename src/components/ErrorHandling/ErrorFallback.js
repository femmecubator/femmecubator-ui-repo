import React from 'react';
import errorIllustration from './errorIllustration.svg';
import Button from '@material-ui/core/Button';
function iconStyles() {
    return {
        centered: {
            margin: "0 auto",
            width: "50%",
            marginTop: "5%",
            fontFamily: 'Open Sans, sans-serif',
        },
        errorText: {
            fontWeight: "700",
            color: "#400CCC",
            fontSize: "1.75rem",
        },
        normalText: {
            fontWeight: "400",
            fontSize: '1.3rem',
            marginLeft: '2.3rem'
        },
        successIcon: {
            width: "8.5rem",
            height: "2.85rem",
            fontFamily: 'Open Sans, sans-serif',
            backgroundColor: "#1E90FF",
            color: "#fff",
            fontWeight: "600",
        },
        image: {
            width: "100%",
        }
    }
}

function ErrorFallback({ error, resetErrorBoundary }) {
    const classes = makeStyles(iconStyles)();
    return (
        <div className={classes.centered}>
            <img className={classes.image} src={errorIllustration} alt='errorIllustration' />
            <h2 className={classes.errorText}>We're having trouble loading this page.</h2>
            <p className={classes.normalText}>Try again or do a quick reset by logging out.</p>
            <Button variant="contained" className={classes.successIcon} onClick={resetErrorBoundary}>Try Again</Button>
        </div>
    )
}

export default ErrorFallback;
