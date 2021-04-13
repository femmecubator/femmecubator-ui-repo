import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  InputLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    justifyContent: 'flex-start',
    marginTop: '5%',
  },
  button: {
    marginTop: '48px',
    display: 'flex',
    justifyContent: 'flex-start !important',
    backgroundColor: '#026FE4',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#026FE4 !important',
      color: 'white',
      borderColor: ' #026FE4',
    },
  },
  inputLabel: {
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '16px',
    fontStyle: 'normal',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '400',
    lineHeight: '24px',
  },
  termsLabel: {
    color: '#4F4F4F',
    fontSize: '14px',
    fontStyle: 'normal',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: '700',
    lineHeight: '24px',
    marginTop: '19px',
    display: 'inline-block',
    padding: '2px',
    cursor: 'pointer',
  },
  buttonPosition: {
    justifyContent: 'flex-start',
  },
}));

const TermsOfService = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <InputLabel className={classes.termsLabel}>
        I agree to Femmecubator's
      </InputLabel>
      <InputLabel
        onClick={handleClickOpen}
        className={classes.termsLabel}
        style={{ color: '#026FE4' }}
      >
        Terms of Service
      </InputLabel>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Terms of Service'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            egestas quis ipsum suspendisse ultrices gravida dictum. Nunc sed
            velit dignissim sodales ut eu. Sit amet mattis vulputate enim. Sed
            ullamcorper morbi tincidunt ornare massa. Est pellentesque elit
            ullamcorper dignissim cras tincidunt lobortis feugiat. Duis at
            consectetur lorem donec massa sapien faucibus. Faucibus interdum
            posuere lorem ipsum dolor sit. Magna fermentum iaculis eu non diam
            phasellus vestibulum lorem sed. Urna cursus eget nunc scelerisque
            viverra. Lacus sed viverra tellus in hac habitasse. Ipsum dolor sit
            amet consectetur. Velit scelerisque in dictum non. Imperdiet proin
            fermentum leo vel. Nulla facilisi etiam dignissim diam. Ipsum dolor
            sit amet consectetur adipiscing elit ut aliquam purus. Lobortis
            feugiat vivamus at augue eget arcu dictum varius duis. Vestibulum
            rhoncus est pellentesque elit ullamcorper dignissim. Lectus arcu
            bibendum at varius vel pharetra. Scelerisque viverra mauris in
            aliquam sem. Est sit amet facilisis magna etiam. Ut venenatis tellus
            in metus vulputate eu scelerisque felis imperdiet. Dictum fusce ut
            placerat orci nulla pellentesque dignissim enim sit. In ornare quam
            viverra orci sagittis eu volutpat. Sed risus pretium quam vulputate
            dignissim suspendisse in est. Consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus et netus. Vestibulum
            lorem sed risus ultricies tristique nulla aliquet enim. Montes
            nascetur ridiculus mus mauris vitae ultricies. Gravida in fermentum
            et sollicitudin ac orci phasellus egestas tellus. Aenean pharetra
            magna ac placerat. Senectus et netus et malesuada fames ac. Vitae
            suscipit tellus mauris a. Eget lorem dolor sed viverra. Quis viverra
            nibh cras pulvinar mattis nunc sed. Vel turpis nunc eget lorem dolor
            sed viverra ipsum nunc. Nunc sed id semper risus in hendrerit
            gravida rutrum. Vulputate sapien nec sagittis aliquam. Enim ut
            tellus elementum sagittis vitae et. Lacus sed viverra tellus in hac
            habitasse platea dictumst vestibulum. Non tellus orci ac auctor
            augue mauris augue. Morbi blandit cursus risus at ultrices.
            Consectetur adipiscing elit ut aliquam purus sit. Lectus proin nibh
            nisl condimentum id. Ipsum suspendisse ultrices gravida dictum fusce
            ut. Est velit egestas dui id ornare arcu odio ut. Sem nulla pharetra
            diam sit amet. Diam in arcu cursus euismod quis. Porta non pulvinar
            neque laoreet suspendisse interdum. Viverra accumsan in nisl nisi.
            Cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
            Nulla pharetra diam sit amet nisl. Ac felis donec et odio. Risus
            pretium quam vulputate dignissim suspendisse. Convallis convallis
            tellus id interdum velit laoreet id. Dignissim cras tincidunt
            lobortis feugiat. Sit amet dictum sit amet justo donec enim diam.
            Est ante in nibh mauris cursus. Etiam erat velit scelerisque in. Ac
            turpis egestas maecenas pharetra convallis. Morbi tincidunt augue
            interdum velit euismod in pellentesque massa placerat. Et magnis dis
            parturient montes nascetur. Rhoncus est pellentesque elit
            ullamcorper dignissim cras. At risus viverra adipiscing at in. Donec
            ac odio tempor orci. Hendrerit dolor magna eget est lorem ipsum.
            Donec pretium vulputate sapien nec sagittis aliquam malesuada
            bibendum. Purus sit amet volutpat consequat mauris nunc congue nisi
            vitae. Quis varius quam quisque id. Ultrices eros in cursus turpis
            massa tincidunt. Sed vulputate mi sit amet mauris commodo.
            Condimentum mattis pellentesque id nibh. Fermentum dui faucibus in
            ornare quam viverra orci. Dolor morbi non arcu risus. Id consectetur
            purus ut faucibus. Malesuada pellentesque elit eget gravida. Luctus
            venenatis lectus magna fringilla urna porttitor rhoncus dolor purus.
            Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque.
            Vitae suscipit tellus mauris a diam. Tincidunt vitae semper quis
            lectus nulla at volutpat diam ut. Phasellus faucibus scelerisque
            eleifend donec pretium vulputate sapien nec. Nibh mauris cursus
            mattis molestie a. Pellentesque habitant morbi tristique senectus et
            netus et malesuada. Eu scelerisque felis imperdiet proin fermentum
            leo vel orci porta. Nulla malesuada pellentesque elit eget gravida
            cum sociis. Mauris rhoncus aenean vel elit scelerisque mauris
            pellentesque pulvinar pellentesque. Egestas integer eget aliquet
            nibh praesent tristique. Lacus sed turpis tincidunt id. Nunc sed
            augue lacus viverra vitae congue eu consequat ac. Turpis egestas
            maecenas pharetra convallis posuere. Velit euismod in pellentesque
            massa placerat.
            <DialogActions className={classes.buttonPosition}>
              <Button
                onClick={handleClose}
                className={classes.button}
                color="primary"
              >
                I Agree
              </Button>
              <Button onClick={handleClose} className={classes.button}>
                I Decline
              </Button>
            </DialogActions>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TermsOfService;
