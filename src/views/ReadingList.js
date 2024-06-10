import { useRecoilState } from 'recoil';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { readingList } from '../atoms/ReadingList';
import BooksList from '../components/BooksList';

const ReadingList = () => {
  const [list, setList] = useRecoilState(readingList);
  console.log(list);
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
          <Button
            variant='outlined'
            sx={{ marginRight: '10px', textDecoration: 'none !important' }}
          >
            <a href='/'>
              <Typography sx={{ minWidth: 100 }}>Back</Typography>
            </a>
          </Button>
        </Grid>
      </Box>
      <Box sx={{ width: '100%' }} marginTop={4}>
        <BooksList books={list} />
      </Box>
    </Stack>
  );
};

export default ReadingList;
