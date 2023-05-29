"use client";
import { Grid } from "@mui/joy";
import React from "react";
import DashboardProgress from "../components/DashboardProgress";
import DashboardBarStats from "../components/DashboardBarStats";
import { barData, chartData } from "../../dummyData";
import DashboardGraph from "../components/DashboardGraph";
import DashboardDetailedBar from "../components/DashboardDetailedBar";

const HomePage = () => {
  return (
    <Grid
      gridRow={20}
      spacing={2}
      container
      sx={{ maxWidth: "100%", flexGrow: 1 }}
    >
      <Grid xs={4}>
        <DashboardProgress
          percent={25}
          countTitle="Total Active Users"
          currentValue={75000}
          amountIncreasedToday="+3%"
          goalType="Yearly goal"
        />
      </Grid>
      <Grid xs={4}>
        <DashboardBarStats
          countTitle="Total Installed"
          currentValue={4689}
          amountIncreasedToday="65"
          barData={barData}
        />
      </Grid>
      <Grid xs={4}>
        <DashboardProgress
          percent={25}
          countTitle="Total Active Users"
          currentValue={75000}
          amountIncreasedToday="+3%"
          goalType="Yearly goal"
        />
      </Grid>

      <Grid xs={8}>
        <DashboardGraph areaChartData={chartData} />
      </Grid>

      <Grid xs={4}>
        <DashboardDetailedBar />
      </Grid>
    </Grid>
  );
};

export default HomePage;
