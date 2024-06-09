import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchBar = ({ books }) => (
  <Stack
    xs={12}
    direction={{ xs: 'column', sm: 'row' }}
    spacing={4}
    alignContent='center'
    justifyContent='center'
  >
    <Box sx={{ maxWidth: 200 }}>
      <Autocomplete
        onSelect={console.log}
        xs={{ width: 300 }}
        getOptionLabel={(option) => option.title}
        id='combo-box'
        options={books}
        sx={{ width: 300 }}
        renderOption={(props, option) => (
          <Box
            component='li'
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading='lazy'
              width='20'
              srcSet={option.coverPhotoURL}
              src={option.coverPhotoURL}
              alt=''
            />
            {option.title}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label='Books' />}
      />
    </Box>
  </Stack>
);

export default SearchBar;
