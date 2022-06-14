import * as React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ModularComponent from "../components/ModularComponent/ModularComponent";
import WeatherComponent from "../components/CustomComponents/WeatherComponent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Layout1() {

    

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <ModularComponent/>
        </Grid>
        <Grid item xs={4}>
          <ModularComponent/>
        </Grid>
        <Grid item xs={4}>
          <ModularComponent/>
        </Grid>
        <Grid item xs={8}>
          <ModularComponent/>
        </Grid>
      </Grid>
    </Box>
  );
}
