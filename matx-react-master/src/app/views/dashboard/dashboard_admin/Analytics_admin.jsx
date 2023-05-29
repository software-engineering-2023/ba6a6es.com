import { Card, Grid, styled, useTheme, Button, Icon } from "@mui/material";
import { Fragment } from "react";
import StatCards from "../shared/StatCards";
import StatCards2 from "../shared/StatCards2";
import { Span } from "app/components/Typography";
import { Link } from "react-router-dom";
import { Title } from "@mui/icons-material";
import { Subtitles } from "@mui/icons-material";
import LineChart from "app/views/charts/echarts/LineChart";
import { H2 } from "app/components/Typography";
import TransactionTable from "./TransactionTable";

const Analytics_admin = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
          <H2 style={{ marginBottom: "15px" }}>Techical Issues</H2>
          <TransactionTable
            subscribarList={[
              {
                id: "#1010",
                Date: "18/5/2023",
                user: "Waleed Algamal",
                text: "Resolve",
              },
              {
                id: "#1011",
                Date: "17/5/2023",
                user: "Hana Younes",
                text: "Resolve",
              },
              {
                id: "#1012",
                Date: "16/5/2023",
                user: "Zeyad Habash",
                text: "Resolve",
              },
              {
                id: "#2011",
                Date: "15/5/2023",
                user: "Haneen Khaled",
                text: "Resolve",
              },
              {
                id: "#1013",
                Date: "15/5/2023",
                user: "Shrouq Abdulraof",
                text: "Resolve",
              },
            ]}
          />
        </Card>
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
          <H2 style={{ marginBottom: "15px" }}>UsefulLinks</H2>
          <Button
            color="primary"
            variant="text"
            type="submit"
            align="center"
            component={Link}
            to="/banker_criteria/OpenBank"
          >
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>
              Bank Tech Latest Updates{" "}
            </Span>
          </Button>
        </Card>
      </Grid>
    </Fragment>
  );
};

export default Analytics_admin;
