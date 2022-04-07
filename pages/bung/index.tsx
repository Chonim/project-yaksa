import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const BungListPage = () => (
  <List dense={false}>
    {[0, 1, 2, 3].map((value) => {
      return (
        <ListItem key={value}>
          <ListItemButton>
            <ListItemText
              primary={`벙 ${value}`}
              secondary={false} />
          </ListItemButton>
        </ListItem>
      )
    })}
  </List>
)

export default BungListPage