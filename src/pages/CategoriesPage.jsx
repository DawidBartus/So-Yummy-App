import { Outlet } from 'react-router';
import CategoriesSlider from '../components/Categories/CategoriesSlider';
import { OutletSection } from '../components/reusableComponents/Sections';
import { SectionHeader } from '../components/reusableComponents/Headers';

const CategoriesPage = () => {
    return (
        <>
            <div style={{ width: '100%', margin: '10px 0 20px 20px' }}>
                <SectionHeader>Categories</SectionHeader>
            </div>
            <CategoriesSlider />
            <OutletSection>
                <Outlet />
            </OutletSection>
        </>
    );
};

export default CategoriesPage;
