import { UniversalInput } from '../components/reusableComponents/Inputs';
import { useState } from 'react';

const DevComponents = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        name: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        setFormValues((prev) => ({
            ...prev,
            [id]: value,
        }));
        console.log(formValues);
    };
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',

                backgroundColor: 'grey',
                gap: 30,
            }}
        >
            <UniversalInput
                setInput={handleInputChange}
                placeholder={'Password'}
                inputId={'password'}
                inputType={'password'}
            />
            <UniversalInput
                setInput={handleInputChange}
                placeholder={'Email'}
                inputId={'email2'}
                inputType={'email'}
            />
            <UniversalInput
                setInput={handleInputChange}
                placeholder={'Name'}
                inputId={'name'}
                inputType={'text'}
            />

            <p>email:{formValues.email}</p>
            <p>password:{formValues.password}</p>
            <p>name:{formValues.name}</p>
        </div>
    );
};

export default DevComponents;
