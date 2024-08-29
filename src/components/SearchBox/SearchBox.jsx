import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';


const SearchBox = () => {
  const searchFieldId = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div >
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input
        id={searchFieldId}
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;