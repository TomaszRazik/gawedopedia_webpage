import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import {
  Button,
  TextField,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import PropTypes from "prop-types";

export const YellowButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

export function SuccessSnackbar(message) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
export const DeleteWindow = ({ isOpen, onClose, onDelete }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Czy na pewno chcesz usunąć ten element?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ta operacja nie będzie mogła być cofnięta. Wpis zostanie trwale
            usunięty.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cofnij</Button>
          <Button onClick={onDelete} variant="contained" color="secondary">
            Usuń
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DeleteWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export const EditLandWindow = ({
  isOpen,
  onClose,
  name,
  s_descr,
  l_descr,
  hashtags,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edycja pozycji"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                name="name"
                inputProps={{ maxLength: 100 }}
                value={name}
                label="Nazwa"
                onChange={handleInputChange}
              />
              <TextField
                required
                name="s_descr"
                inputProps={{ maxLength: 300 }}
                value={s_descr}
                label="Krótki opis"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                name="l_descr"
                value={l_descr}
                label="Długi opis"
                multiline
                rows={8}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputProps={{ maxLength: 200 }}
                name="hashtags"
                value={hashtags}
                label="Hashtags"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cofnij</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Zapisz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

EditLandWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
