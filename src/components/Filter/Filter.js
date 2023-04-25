import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filtersSlice';
import { selectFilters } from 'redux/filter/filterSelector';
import { useSelector } from 'react-redux';
import {
  FormControl,
  Grid,
  InputAdornment,
  FilledInput,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const handlerFilter = e => dispatch(setFilter(e.target.value));
  return (
    <Box
      sx={{
        flexGrow: 1,
        alignItems: 'center',
        maxWidth: '600px',
        m: '10px auto 0 auto',
      }}
    >
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <FilledInput
            placeholder="Find contact by name"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            id="name"
            value={filter}
            onChange={handlerFilter}
            type="text"
            label="Filter"
          />
        </FormControl>
      </Grid>
    </Box>
  );
};
