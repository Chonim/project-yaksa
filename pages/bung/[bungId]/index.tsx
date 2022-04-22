import React from 'react'
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import Router from 'next/router';

const BungDetail = () => {
  const openApplyPage = () => {
    Router.push(`${Router.asPath}/apply`)
  }
  return (
    <Container>
      <div>
        <div className="button-wrapper">
          <h1>[초급] 800 남산 북악산</h1>
          <Button variant="contained" onClick={openApplyPage}>참가</Button>
          <Button variant="contained">참가현황</Button>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div``

export default BungDetail