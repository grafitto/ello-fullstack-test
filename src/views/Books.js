import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import BooksList from '../components/BooksList';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useQuery, gql } from '@apollo/client';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

function Books() {
  const { data, loading, error } = useQuery(BOOKS);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  return (
    <Stack direction='column'>
      <Box
        marginTop={4}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Grid container justifyContent='center'>
          <Button variant='outlined' sx={{ marginRight: '10px' }}>
            <a href='/' style={{ textDecoration: 'none !important' }}>
              <Typography sx={{ minWidth: 100 }}>All Books</Typography>
            </a>
          </Button>
          <Button variant='outlined'>
            <a
              href='/reading-list'
              style={{ textDecoration: 'none !important' }}
            >
              <Typography sx={{ minWidth: 100 }}>Reading List</Typography>
            </a>
          </Button>
        </Grid>
      </Box>
      <Box sx={{ width: '100%' }} marginTop={4}>
        <SearchBar books={books} />
        <BooksList books={books} />
      </Box>
    </Stack>
  );
}

export default Books;

