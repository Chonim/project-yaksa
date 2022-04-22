import styled from '@emotion/styled'
import { Button } from '@mui/material'
import Router from 'next/router'
import React from 'react'

type Props = {}

const Participants = (props: Props) => {
  const openApplyPage = () => {
    const { bungId } = Router.query
    Router.push(`/bung/${bungId}/apply`)
  }
  return (
    <Container>
      <p>나의 신청 현황</p>
      <Card>
        이름             사고뭉치 이예린
        합류위치      토토로
        한발
        대기
      </Card>
      <p>전체 신청 현황</p>
      <Card>
        참가 인원 7/15
      </Card>
      <Card>
        참가자                                  합류장소
        쵸                                         토토로
        재코리                                  용비교
        예린                                     토토로
        보라돌이
        뚜비
        나나
        뽀
      </Card>
      <p>한발</p>
      <Card>
        월자
      </Card>
      <p>대기</p>
      <Card>
        월자
      </Card>
      <p>토토로 800</p>
      <Card>
        참가자 1
        참가자 2
        참가자 3

        한발 참가자n
      </Card>
      <p>용비교 830</p>
      <Card>
        참가자 1
        참가자 2
        참가자 3

        한발 참가자n
      </Card>
      <div className='buttons'>
        <Button variant='contained' onClick={openApplyPage}>참가하기</Button>
        <Button variant='contained' onClick={() => Router.back()}>취소하기</Button>
      </div>
    </Container>
  )
}

const Container = styled.main`
  width: 100%;
  & > .buttons {
    display: flex;
    width: 100%;
  }
`

const Card = styled.section`
  background-color: #ddd;
  padding: 1rem;
  border-radius: .5rem;
`

export default Participants