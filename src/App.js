import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import NavBar from "./components/NavBar";
import ShowCard from "./components/ShowCard";
import { getUpcomingMatches } from "./api/Api";
import { Grid,Typography } from "@material-ui/core"
function App() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getUpcomingMatches()
      .then((data) => {
        setMatches(data.matches)
        console.log(data.matches)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar />
      <Typography align="center" variant="h3" style={{marginTop:20}}>Welcome to Live cricket score app</Typography>

      <Grid container justify="center">
        <Grid>
          {matches.map((match) => (
            <Fragment>
            {match.type == "Twenty20" ? <ShowCard key={match.unique_id} match={match} /> : ''}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
