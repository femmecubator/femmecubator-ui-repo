import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import errorIllustration from '../../assets/images/errorIllustration.svg';
import Button from '@material-ui/core/Button';
import {
    createMuiTheme, MuiThemeProvider, responsiveFontSizes, ThemeProvider, Typography
} from "@material-ui/core";
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const errorStyles = makeStyles(() => ({
    centered: {
        margin: "0 auto",
        width: "100%",
        marginTop: "5%",
        "@media (max-width: 680px)": {
            marginTop: "15%",
            width: "90%",
        },
    },
    errorText: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: "700",
        color: "#400CCC",
        fontSize: "1.75rem",
        marginBottom: "1.5rem",
    },
    normalText: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: "400",
        fontSize: "1.3rem",
        marginBottom: "1.5rem",
        "@media (max-width: 680px)": {
            maxWidth: "77%",
            marginLeft: "3rem",
        }
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
        width: "50%",
        "@media (max-width: 680px)": {
            width: "100%",
        }
    }
}))

const gutterBottom = true;

function ErrorFallback() {
    const { image, errorText, normalText, successIcon, centered } = errorStyles();
    const { reload } = window.location;
    return (
        <div className={centered}>
            <MuiThemeProvider theme={theme}>
                <img className={image} src={errorIllustration} alt='errorIllustration' />
                <Typography className={errorText} variant="h2" gutterBottom>
                    We're having trouble loading this page.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom className={normalText}>
                    Try again or do a quick reset by logging out.
                </Typography>
                <Button {...{ variant: 'contained', className: successIcon, onClick: reload.bind(window.location) }}>Try Again</Button>
            </MuiThemeProvider>
        </div>
    )
}

export default ErrorFallback;
