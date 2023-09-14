import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchQuery } from '../../redux/recipesSlice';
import Post from '../Post/Post';
import { FixedLoader } from '../reusableComponents/Loader';
import { SectionHeader } from '../reusableComponents/Headers';
import FlexContainer from '../reusableComponents/FlexContainer';

const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const foundRecipes = useSelector((state) => state.recipes.foundRecipes);
    const isPending = useSelector((state) => state.recipes.isPending);

    const setInputValue = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query === '') {
            return;
        }
        dispatch(fetchSearchQuery(query));
    };

    return (
        <>
            <section
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                }}
            >
                <SectionHeader>Search</SectionHeader>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="query"
                        onChange={setInputValue}
                    ></input>
                    <button type="submit">Search</button>
                </form>
                <FlexContainer style={{ flexWrap: 'wrap', gap: 20 }}>
                    {foundRecipes.map((element, index) => (
                        <Post key={index} props={element} />
                    ))}
                </FlexContainer>
            </section>
            {isPending && <FixedLoader />}
        </>
    );
};

export default Search;
