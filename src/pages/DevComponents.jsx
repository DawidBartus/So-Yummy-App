import { useParams } from 'react-router';

const DevComponents = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <section>
            <p>categirue</p>
        </section>
    );
};

export default DevComponents;
