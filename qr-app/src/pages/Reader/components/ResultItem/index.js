import React from "react";
import FeedItem from "../../../../components/FeedItem";
import { Typography, Grid } from "@material-ui/core";
import './styles.css';

export default function ResultItem({data}) {
  return (
    <div>
      <FeedItem>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Ultimo resultado</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">{data}</Typography>
          </Grid>
        </Grid>
      </FeedItem>
    </div>
  );
}
