"use client";
import { Grid } from "@mui/joy";
import React from "react";
import DashboardProgress from "../components/DashboardProgress";
import DashboardBarStats from "../components/DashboardBarStats";
import { apps, barData, chartData } from "../../dummyData";
import DashboardGraph from "../components/DashboardGraph";
import DashboardDetailedBar from "../components/DashboardDetailedBar";
import DashboardTable from "../components/DashboardTable";
import DashboardAppList from "../components/DashboardAppList";

const HomePage = () => {
  return (
    <Grid spacing={2} container>
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
          countTitle="Total Downloads"
          currentValue={2000}
          amountIncreasedToday="+3%"
          goalType="Yearly goal"
        />
      </Grid>

      <Grid xs={8}>
        <DashboardGraph areaChartData={chartData} />
      </Grid>

      <Grid xs={4}>
        <DashboardDetailedBar barCharData={barData} />
      </Grid>

      <Grid xs={8}>
        <DashboardTable />
      </Grid>
      <Grid xs={4}>
        <DashboardAppList title="Related Apps" app={apps} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
