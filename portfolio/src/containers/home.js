import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item lg={3}>
                    <Typography variant="h6">Home</Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* <Grid item xs={12}>
                  <Grid container>
                    <Grid item lg={3}>
                      <Typography variant="h6">Home</Typography>
                    </Grid>
                  </Grid>
                </Grid> */}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;
