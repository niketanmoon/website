import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  CardActions,
  Divider,
} from "@mui/material";
import { projectData } from "../data";
import GitHubIcon from "@mui/icons-material/GitHub";

const headerColor = ["#33717e", "#c62d70"];

const Projects = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item lg={3}>
                    <Typography variant="h4">Projects</Typography>
                  </Grid>
                </Grid>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {projectData.map((ele) => {
                    return (
                      <Grid item xs={12} key={ele.id}>
                        <Card>
                          <CardHeader
                            sx={{
                              backgroundColor: headerColor[ele.id % 2],
                              color: "whitesmoke",
                            }}
                            title={ele.title}
                            titleTypographyProps={{ variant: "h6" }}
                          />
                          <CardContent
                          // sx={{ backgroundColor: "black", color: "white" }}
                          >
                            <Typography variant="body2">
                              {ele.description}
                            </Typography>
                          </CardContent>
                          <Divider />
                          <CardActions
                            sx={{
                              display: "flex",
                              justifyContent: "right",
                              // backgroundColor: "black",
                              // // color: "white",
                            }}
                          >
                            <Button
                              size="small"
                              sx={{ backgroundColor: "black" }}
                              href={ele.github_link}
                              target="_blank"
                              variant="contained"
                              color="info"
                              startIcon={<GitHubIcon />}
                            >
                              Github
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Projects;
