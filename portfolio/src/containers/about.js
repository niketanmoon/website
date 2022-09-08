import React from "react";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import "../styles/about.css";

const About = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item lg={3}>
                    <Typography variant="h4">About Me</Typography>
                  </Grid>
                </Grid>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">
                      <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                        Niketan
                      </span>{" "}
                      is a Data Science enthusiast with a background in{" "}
                      <b>Full Stack Development</b>. He is currently studying{" "}
                      <b>Data Science</b> at University of Adelaide.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">
                      He did his Bachelors in{" "}
                      <b>Computer Science and Engineering</b>
                      and worked as a <b>Research Assitant</b> at{" "}
                      <b>Nalanda Labs</b>. It is here, where he got to know all
                      about arduino, raspi and played with sensors and built
                      some cool prototypes.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">
                      He is passionate towards programming and coding and has
                      solved around 350 problems on{" "}
                      <Link
                        to="https://leetcode.com/niketanmoon/"
                        sx={{ cursor: "pointer" }}
                      >
                        Leetcode
                      </Link>
                      .
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">
                      In his past experience as Software Engineer, he used to
                      work as a Full Stack Developer with <b>Django</b> and{" "}
                      <b>React</b>. He built amazing products in E-Commerce and
                      Insurance space. Later, he worked on a Machine Learning
                      product to automate machine learning tasks using User
                      Interface in Django and React. He likes building web apps,
                      but integrating machine learning tools was new to him and
                      seeing how this can be used on production level really
                      excited him.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">
                      He has one trimester left and has been working on an
                      industry project which include working with{" "}
                      <b>Neo4j Graph Database</b>.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">
                      His daily rituals involves reading book, listening to
                      podcast, doing a daily challenge on Leetcode and learning
                      from courses on Udemy and Coursera and building some
                      projects on side. He also love playing <b>Chess</b> in his
                      free time.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">
                      His goal is to dive deep into MLOps, which can later be
                      useful to create some exciting solutions to the problems
                      that societies face on a day to day basis. He also like
                      teaching and plans to write blogs on learnings he went
                      through which will help others learn.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">
                      He likes to talk about anything related to{" "}
                      <b>
                        Artificial Intelligence, Machine Learning, building
                        products and in general about Entreprenurship{" "}
                      </b>
                      . If you have some cool ideas or working on some
                      interesting open source projects, where you can
                      collaborate with him, feel free to reach out via mail or
                      shoot a message on Linkedin handle given at the top.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">
                      Hoping to meet with some amazing folks and some productive
                      future years, till then
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container class="about__body">
                  <Grid item lg={12}>
                    <Typography variant="body">Cheers 🥂</Typography>
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

export default About;
