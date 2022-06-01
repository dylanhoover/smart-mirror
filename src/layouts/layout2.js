import * as React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Layout2() {

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '297bde95ba03dd2c1443c9797becc09b',
        lat: '-37.814',
        lon: '144.96332',
        lang: 'en',
        units: 'metric',
    });

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=2</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
