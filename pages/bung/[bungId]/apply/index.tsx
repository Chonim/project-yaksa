import { Button, Checkbox, FormControl, FormControlLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const BungApplyPage = () => {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 'calc(100% - 1rem)', mt: 3 }}>
        <p>닉네임</p>
        <TextField placeholder='사고뭉치 이예린' />
        <p>합류위치</p>
        <Select>
          <MenuItem value={'토토로'}>토토로</MenuItem>
          <MenuItem value={'용비교'}>용비교</MenuItem>
          <MenuItem value={'한남나들목'}>한남나들목</MenuItem>
        </Select>

        <div className='checkbox'>
          <FormControlLabel control={<Checkbox defaultChecked />} label="한발" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="추노여부" />
        </div>

        <Button variant='contained'>참가하기</Button>
      </FormControl>
    </div>
  )
}

export default BungApplyPage