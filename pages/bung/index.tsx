import { Grid, List, ListItem, ListItemText, styled, Typography } from '@mui/material'
import React from 'react'

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function generate(element: React.ReactElement) {
  return [0, 1, 2, 3].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const BungListPage = () => (
  <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Text only
      </Typography>
      <Demo>
        <List dense={false}>
          {generate(
            <ListItem>
              <ListItemText
                primary="Single-line item"
                secondary={false} />
            </ListItem>
          )}
        </List>
      </Demo>
    </Grid>
  </Grid>
)

export default BungListPage