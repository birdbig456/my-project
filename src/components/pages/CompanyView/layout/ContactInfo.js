import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";
import * as addressActions from "../../../actions/Address.action";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    paddingTop: 1,
    paddingLeft: 20,
    paddingBottom: 1,
    paddingRight: 20,
  },
  PopHead: {
    fontSize: 15,
    paddingTop: 1,
    paddingBottom: 1,
    marginTop:10,
    marginLeft:5
  },
  InputPop: {
    width: "60%",
    paddingLeft: 10,
    display: "inline-block",
    paddingTop:5,
    paddingBottom:5,
    textAlign:"left",  
  },
}));
export default function Contactinfo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(" ");
  const handleChange = event => {
    setName(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addressReducer = useSelector((state) => state.addressReducer);
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <div>
        <h3>CONTACT INFORMATION</h3>
      </div>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>Primary Admin</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h4>scgpongsakorn@demo.scg.co.th</h4>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <h4>HR CONTACT</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div>
            <Button
              color="secondary"
              className="Button"
              onClick={handleClickOpen}
              onChange={handleChange}
            >
              <AddCircleIcon color="secondary" />
              <h5>ADD HR CONTACT </h5>
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle id="alert-dialog-title">
                {"ADD HR CONTACT"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                      id="standard-name"
                      label="Name"
                      value={name}
                      onChange={handleChange}
                    />
                  </form>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  color="secondary"
                  variant="contained"                        
                  onClick={(name) => dispatch(addressActions.addlocation(name))}
                >
                  ADD
                </Button>
                <Button onClick={handleClose} color="secondary" autoFocus>
                  CANCLE
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
