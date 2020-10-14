import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Button, CardContent, Dialog, DialogContentText, DialogTitle,DialogContent,DialogActions ,Grid, Typography } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import { getMatchDetails } from "../api/Api";

function ShowCard({ match }) {
  const [detail, setDetail] = useState([]);
  const [open, setOpen] = useState(false);

  const handleButtonClick = (id) => {
    getMatchDetails(id)
      .then((data) => {
        console.log(data);
        setDetail(data);
        handleOpen();
      })
      .catch((err) => console.log(err));
  };
  const getMatchCard = () => {
    return (
      <Card style={{ marginTop: 10 }}>
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">{match["team-1"]}</Typography>
            </Grid>
            <Grid item>
              <img style={{ width: 85 }} src={require("../img/vs.jpg")} alt="" />
            </Grid>
            <Grid item>
              <Typography variant="h5">{match["team-2"]}</Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justify="center">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                handleButtonClick(match.unique_id);
              }}
            >
              Show Details
            </Button>

            <Button variant="outlined" color="secondary" style={{ marginLeft: 10 }}>
              Start Time {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  };

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const getDialog = () => {
      return(
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <DialogTitle id="alert-dialog-title">{"Match Details"}</DialogTitle>
        <DialogContentText id="alert-dialog-description">
          <Typography>{detail.stat}</Typography>
          <Typography>
            Match: <span style={{ fontWeight: "bold" }}>{detail.matchStarted ? "Started" : "Not started"}</span>
          </Typography>
          <Typography>
            Score: <span style={{ fontWeight: "bold" }}>{detail.score}</span>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button onClick={handleClose} color="primary" autofocus>
          Close
      </Button>
      </DialogActions>
    </Dialog>
      )};

  return (
      <div>
      {getMatchCard()}
      {getDialog()}
      </div>
  )
}

export default ShowCard;
