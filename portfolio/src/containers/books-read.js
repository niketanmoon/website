import React from "react";
import {
  // Button,
  Card,
  // CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { booksData } from "../data";

const Books = () => {
  const stateToggleStatus = useSelector((state) => {
    return state.common;
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card sx={{ borderRadius: "10px" }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography variant="h4">Books Read</Typography>
                  </Grid>
                </Grid>
                <Divider />
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={3}>
                  {booksData.map((ele) => {
                    return (
                      <Grid
                        item
                        xs={6}
                        md={stateToggleStatus.toggleStatus ? 4 : 3}
                        lg={3}
                        key={ele.id}
                      >
                        <Card
                          sx={{
                            borderRadius: "20px",
                            objectFit: "contain",
                            // maxWidth: "300px",
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={ele.img_url}
                            alt={ele.name}
                            sx={{
                              height: "385px",
                            }}
                          />
                          {/* <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {ele.name}
                            </Typography>
                          </CardContent> */}
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

export default Books;
