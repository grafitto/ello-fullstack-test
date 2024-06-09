import React from 'react';
import { useRecoilState } from 'recoil';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import { pink } from '@mui/material/colors';
import { readingList } from '../atoms/ReadingList';

const Book = ({ book }) => {
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

  const card = (
    <React.Fragment>
      <CardHeader title={book.title} subheader={book.author} />
      <CardMedia
        component='img'
        height='194'
        image={book.coverPhotoURL}
        alt={book.title}
      />
      <CardActions disableSpacing>
        <IconButton aria-label='add to reading list'>
          {bookInReadingList(book) ? (
            <DeleteIcon
              onClick={() => console.log(book)}
              sx={{ color: pink[500] }}
            />
          ) : (
            <AddIcon onClick={() => addBookToReadingList(book)} />
          )}
        </IconButton>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Grid item xs={{ maxWidth: 200 }} md={{ maxWidth: 100 }}>
      <Card variant='outlined'>{card}</Card>
    </Grid>
  );
};

export default Book;
