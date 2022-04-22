import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import Router from 'next/router';
import React from 'react'
import styled from '@emotion/styled'

const BungList = () => {
  const openBungDetail = (id: number) => {
    Router.push(`/bung/${id}`)
  }
  const openBungCreate = () => {
    Router.push(`/bung/create`)
  }
  return (
    <Container>
      <List dense={false}>
        {[0, 1, 2, 3].map((id) => {
          return (
            <ListItem key={id}>
              <ListItemButton onClick={() => openBungDetail(id)}>
                <ListItemText
                  primary={`벙 ${id}`}
                  secondary={false} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <Button variant="contained" onClick={openBungCreate}>벙 열기</Button>
    </Container>
  )
}

const Container = styled.div``

export default BungList