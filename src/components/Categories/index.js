import { Outlet } from 'react-router';
import { SectionHeader } from '../reusableComponents/Headers';
import { SecondaryOutlet } from '../reusableComponents/Sections';
import CategoriesSlider from './CategoriesSlider';

const Categories = () => {
    return (
        <>
            <div style={{ width: '100%', margin: '10px 0 20px 20px' }}>
                <SectionHeader>Categories</SectionHeader>
            </div>
            <CategoriesSlider />
            <SecondaryOutlet style={{ position: 'relative' }}>
                <Outlet />
            </SecondaryOutlet>
        </>
    );
};

export default Categories;
