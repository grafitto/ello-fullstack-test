import React from 'react';
import { useRecoilState } from 'recoil';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';

import { readingList } from '../atoms/ReadingList';

const SearchBar = ({ books }) => {
  const [list, setList] = useRecoilState(readingList);

  const bookInReadingList = (book) => {
    return list.find(
      (addedBook) =>
        addedBook.title + addedBook.author === book.title + book.author
    );
  };

  const addBookToReadingList = (book) => {
    if (!bookInReadingList(book)) {
      const newList = [...list, book];
      setList(newList);
    } else {
      console.log('Book already in reading list');
    }
  };

  const removeBookFromReadingList = (book) => {
    if (bookInReadingList(book)) {
      const newList = list.filter(
        (cBook) => cBook.title + cBook.author !== book.title + book.author
      );
      setList(newList);
    } else {
      console.log('Book not in reading list');
    }
  };

  return (
    <Stack
      xs={12}
      direction={{ xs: 'column', sm: 'row' }}
      spacing={4}
      alignContent='center'
      justifyContent='center'
    >
      <Box sx={{ maxWidth: 500 }}>
        <Autocomplete
          onSelect={console.log}
          xs={{ width: '100%' }}
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
              {bookInReadingList(option) ? (
                <DeleteIcon
                  onClick={() => removeBookFromReadingList(option)}
                  sx={{ color: pink[500] }}
                />
              ) : (
                <AddIcon onClick={() => addBookToReadingList(option)} />
              )}
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} label='Search books' />
          )}
        />
      </Box>
    </Stack>
  );
};

export default SearchBar;
