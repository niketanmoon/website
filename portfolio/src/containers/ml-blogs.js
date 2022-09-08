import React from "react";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";

const MlBlogs = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item lg={3}>
                    <Typography variant="h4">Machine Learning Blogs</Typography>
                  </Grid>
                </Grid>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item>
                    <Typography
                      variant="h5"
                      sx={{ fontStyle: "italic", marginTop: "20px" }}
                    >
                      Coming Soon...
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MlBlogs;
