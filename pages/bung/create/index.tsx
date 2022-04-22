import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
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
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={'10'}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <p>내용</p>
      </FormControl>
      <Button variant="contained" onClick={registerBung}>등록하기</Button>
    </div>
  )
}

export default BungCreate