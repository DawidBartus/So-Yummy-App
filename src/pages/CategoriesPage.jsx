import { Outlet } from 'react-router';
import CategoriesSlider from '../components/Categories/CategoriesSlider';
import { OutletSection } from '../components/reusableComponents/Sections';

const CategoriesPage = () => {
    return (
        <>
            <CategoriesSlider />
            <OutletSection>
                <Outlet />
            </OutletSection>
        </>
    );
};

export default CategoriesPage;
