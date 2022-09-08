import React, { useState } from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/skills.css";
import { educationData, toolsData, certificationsData } from "../data";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Skills = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item lg={3}>
                    <Typography variant="h4">Skills</Typography>
                  </Grid>
                </Grid>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    sx={{ backgroundColor: "#c62d70" }}
                  >
                    <Tab label="Education" {...a11yProps(0)} />
                    <Tab label="Tools and Technology" {...a11yProps(1)} />
                    <Tab label="Certifications" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>

                {/* Education */}
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Grid container spacing={2}>
                    {educationData.map((ele) => {
                      return (
                        <Grid item xs={12}>
                          <Card>
                            <CardContent>
                              <Grid container>
                                <Grid
                                  item
                                  xs={1}
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: "20px",
                                  }}
                                >
                                  <SchoolIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={7}>
                                  <Typography variant="h6">
                                    {ele.title}
                                  </Typography>
                                  <Typography variant="subtitle2">
                                    {ele.university}
                                  </Typography>
                                </Grid>
                                <Grid
                                  item
                                  xs={3}
                                  sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    alignItems: "center",
                                  }}
                                >
                                  <Typography>GPA: {ele.gpa}</Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </TabPanel>

                {/* Skills */}
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        Languages and Frameworks
                      </Typography>
                      <Divider />
                      <Grid container spacing={2} marginTop={2}>
                        {toolsData.languages.map((ele) => {
                          return (
                            <Grid item xs={4} md={3} lg={3}>
                              <Item className="skills__tools">{ele}</Item>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="h6">Libraries</Typography>
                      <Divider />
                      <Grid container spacing={2} marginTop={2}>
                        {toolsData.libraries.map((ele) => {
                          return (
                            <Grid item xs={4} md={3} lg={3}>
                              <Item className="skills__tools">{ele}</Item>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        Database and Query Languages
                      </Typography>
                      <Divider />
                      <Grid container spacing={2} marginTop={2}>
                        {toolsData.databases.map((ele) => {
                          return (
                            <Grid item xs={4} md={3} lg={3}>
                              <Item className="skills__tools">{ele}</Item>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">Version Control</Typography>
                      <Divider />
                      <Grid container spacing={2} marginTop={2}>
                        {toolsData.libraries.map((ele) => {
                          return (
                            <Grid item xs={4} md={3} lg={3}>
                              <Item className="skills__tools">{ele}</Item>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                </TabPanel>

                {/* Certifications */}
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <Grid
                    container
                    spacing={2}
                    sx={{
                      maxHeight: "100vh",
                      overflow: "auto",
                    }}
                  >
                    {certificationsData.map((ele) => {
                      return (
                        <Grid item xs={12} key={ele.id}>
                          <Card>
                            <CardContent>
                              <Grid container>
                                <Grid
                                  item
                                  xs={1}
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: "20px",
                                  }}
                                >
                                  <WorkspacePremiumIcon fontSize="large" />
                                </Grid>
                                <Grid item xs={7}>
                                  <Typography variant="h6">
                                    {ele.title}
                                  </Typography>
                                  <Typography variant="subtitle2">
                                    {ele.org}
                                  </Typography>
                                </Grid>
                              </Grid>
                            </CardContent>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </TabPanel>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Skills;
