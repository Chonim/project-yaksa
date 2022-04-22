import { Button, Checkbox, FormControl, FormControlLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import Router from 'next/router'
import React from 'react'

const BungCreate = () => {
  const registerBung = () => {
    console.log('registered!')
    Router.push('/bung')
  }
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value as string);
  };

  return (
    <div>
      <FormControl fullWidth>
        <p>벙제</p>
        <TextField placeholder='내용을 입력해주세요'></TextField>

        <p>상태</p>
        <Select
          value={'10'}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

        <p>난이도</p>
        <Select
          value={'1'}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={0}>초보</MenuItem>
          <MenuItem value={1}>초급</MenuItem>
          <MenuItem value={2}>준중급</MenuItem>
        </Select>

        <div>
          <FormControlLabel control={<Checkbox defaultChecked />} label="한발 가능" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="추노 가능" />
        </div>

        <p>내용</p>
        <section>
          준비물
          코스
          거리/획고/항속
          주의사항
        </section>
      </FormControl>
      <Button variant="contained" onClick={registerBung}>등록하기</Button>
    </div>
  )
}

export default BungCreate