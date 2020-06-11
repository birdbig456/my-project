import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import * as addWorkActions from "../../../../actions/AddWork.action";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Grid } from "@material-ui/core";
export default function AddWork() {
  const [open, setOpen] = React.useState(false);
  const addWorkReducer = useSelector(({ addWorkReducer }) => addWorkReducer);
  const dispatch = useDispatch();
  const [dataWork, setDataWork] = useState({ name: "", code: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="secondary" className="Button" onClick={handleClickOpen}>
        <AddCircleIcon color="secondary" />
        <h5>ADD WORK LOCATION </h5>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <Grid container>
          <Grid sm={1} ></Grid>
            <Grid xs={12} sm={2}>
              <h3>Name :</h3>
            </Grid>
            <Grid xs={12} sm={8}>
            <TextField
              required
              id="margin-dense"
              label="Required"
              fullWidth
              onChange={(e) => {
                setDataWork({ ...dataWork, name: e.target.value });
              }}
            />
            </Grid>
            <Grid sm={1} ></Grid>
            <Grid sm={1} ></Grid>
            <Grid xs={12} sm={2}>
              <h3>Code :</h3>
            </Grid>
            <Grid xs={12} sm={8}>
            <TextField
              required
              id="margin-dense"
              label="Required"
              fullWidth
              onChange={(e) => {
                setDataWork({ ...dataWork, code: e.target.value });
              }}
            />
            </Grid>
            <Grid sm={1} ></Grid>
            <Grid sm={1} ></Grid>
            <Grid xs={12} sm={2}>
              <h3>Address :</h3>
            </Grid>
            <Grid xs={12} sm={8}>
            <TextField
              required
              id="margin-dense"
              label="Country"
              fullWidth
              onChange={(e) => {
                setDataWork({ ...dataWork, code: e.target.value });
              }}
            />
            <TextField
              required
              id="margin-dense"
              label="Street Address"
              style={{width:"60%"}}
              onChange={(e) => {
                setDataWork({ ...dataWork, code: e.target.value });
              }}
            />
            <TextField
              required
              id="margin-dense"
              label="Apt"
              style={{width:"35%",marginLeft:18}}
              onChange={(e) => {
                setDataWork({ ...dataWork, code: e.target.value });
              }}
            />
            <TextField
              required
              id="margin-dense"
              label="City"
              style={{width:"35%"}}
              onChange={(e) => {
                setDataWork({ ...dataWork, code: e.target.value });
              }}
            />
            <TextField
              required
              id="margin-dense"
              label="State"
              style={{width:"27%",marginLeft:18}}
              onChange={(e) => {
                setDataWork({ ...dataWork, code: e.target.value });
              }}
            />
            <TextField
              required
              id="margin-dense"
              label="ZIP Code"
              style={{width:"28%",marginLeft:18}}
              onChange={(e) => {
                setDataWork({ ...dataWork, code: e.target.value });
              }}
            />
            </Grid>
            <Grid sm={1} ></Grid>
            <Grid sm={1} ></Grid>
            <Grid xs={12} sm={2}>
              <h3>Phone :</h3>
            </Grid>
            <Grid xs={12} sm={8}>
            <TextField
              required
              id="margin-dense"
              label="Required"
              fullWidth
              onChange={(e) => {
                setDataWork({ ...dataWork, code: e.target.value });
              }}
            />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => dispatch(addWorkActions.addWork(dataWork))}
            color="primary"
          >
            Submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}