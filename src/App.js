import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import BooksList from './components/BooksList';
import Box from '@mui/material/Box';
import { useQuery, gql } from '@apollo/client';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

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

function App() {
  const { data, loading, error } = useQuery(BOOKS);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  return (
    <Stack direction='row'>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={() => {}}
            size='small'
            sx={{ ml: 2 }}
            // aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            // aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ width: '100%' }} marginTop={4}>
        <SearchBar books={books} />
        <BooksList books={books} />
      </Box>
    </Stack>
  );
}

export default App;

