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
import Avatar from '@mui/material/Avatar';
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

  const getAvatarColor = (book) => {
    switch (book.readingLevel) {
      case 'I':
        return '#4AA088';
      case 'A':
        return '#5ACCCC';
      case 'B':
        return '#335C6E';
      case 'C':
        return '#FABD33';
      case 'D':
        return '#CFFAFA';
      case 'E':
        return '#F76434';
      case 'F':
        return '#FAAD00';
      case 'G':
        return '#53C2C2';
      case 'H':
        return '#FFE6DC';
    }
  };

  const card = (
    <React.Fragment>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: getAvatarColor(book) }} aria-label='recipe'>
            {book.readingLevel}
          </Avatar>
        }
        title={book.title}
        subheader={book.author}
      />
      <CardMedia
        component='img'
        height='194'
        image={book.coverPhotoURL}
        alt={book.title}
      />
      <CardActions>
        <IconButton aria-label='add to reading list'>
          {bookInReadingList(book) ? (
            <DeleteIcon
              onClick={() => removeBookFromReadingList(book)}
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
    <Grid item xs={{ width: 200 }} md={{ width: 100 }}>
      <Card variant='outlined'>{card}</Card>
    </Grid>
  );
};

export default Book;
