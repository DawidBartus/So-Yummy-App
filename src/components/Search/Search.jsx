import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchQuery } from '../../redux/recipesSlice';
import Post from '../Post/Post';
import Loader from '../reusableComponents/Loader';
import { SectionHeader } from '../reusableComponents/Headers';
import { SearchForm } from '../reusableComponents/Inputs';
import { SecondaryOutlet } from '../reusableComponents/Sections';
import TypeComponent from '../TypeAnimation/TypeComponent';

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
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 30,
                }}
            >
                <SectionHeader>
                    <TypeComponent />
                </SectionHeader>

                <SearchForm
                    formId={'query'}
                    inputChange={setInputValue}
                    formSubmit={handleSubmit}
                />

                <SecondaryOutlet style={{ flexWrap: 'wrap', gap: 20 }}>
                    {isPending && (
                        <div style={{ width: '100%' }}>
                            <Loader />
                        </div>
                    )}

                    {foundRecipes.map((element, index) => (
                        <Post key={index} props={element} />
                    ))}
                </SecondaryOutlet>
            </section>
        </>
    );
};

export default Search;
