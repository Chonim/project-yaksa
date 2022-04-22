import React from 'react'
import styled from '@emotion/styled'
import Button from '@mui/material/Button';
import Router from 'next/router';

const BungDetail = () => {
  const openApplyPage = () => {
    Router.push(`${Router.asPath}/apply`)
  }
  const openParticipantsDetailPage = () => {
    Router.push(`${Router.asPath}/participants`)
  }
  return (
    <Container>
      <div>
        <h1>[초급] 800 남산 북악산</h1>
        <ButtonWrapper>
          <Button variant="contained" onClick={openApplyPage}>참가</Button>
          <Button variant="contained" onClick={openParticipantsDetailPage}>참가현황</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="contained" onClick={() => Router.push('/bung')}>목록</Button>
          <Button variant="contained" onClick={openParticipantsDetailPage}>수정하기</Button>
        </ButtonWrapper>
      </div>
    </Container>
  )
}

const Container = styled.div``
const ButtonWrapper = styled.div``

export default BungDetail