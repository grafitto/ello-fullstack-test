import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Book from './Book';

const BooksList = ({ books }) => {
  return (
    <Stack
      xs={8}
      direction={{ xs: 'column', sm: 'row' }}
      spacing={4}
      alignContent='center'
      justifyContent='center'
      marginTop={4}
    >
      <Grid container spacing={2} justifyContent='center'>
        {books.map((book, index) => (
          <Book book={book} key={index} />
        ))}
      </Grid>
    </Stack>
  );
};

export default BooksList;
