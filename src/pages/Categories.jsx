import { Outlet } from 'react-router';
import CategoriesSlider from '../components/Categories/CategoriesSlider';
import { OutletSection } from '../components/reusableComponents/Sections';

const Categories = () => {
    return (
        <>
            <CategoriesSlider />
            <OutletSection>
                <Outlet />
            </OutletSection>
        </>
    );
};

export default Categories;
