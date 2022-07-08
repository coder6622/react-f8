import React, { useState } from 'react';

const courses = [
    {
        id: 1,
        name: 'Html,css',
    },
    {
        id: 2,
        name: 'Javascript',
    },
    {
        id: 3,
        name: 'Java',
    },
];

function App() {
    const [checked, setChecked] = useState([]);

    const handleClick = () => {};
    console.log(checked);

    const handleCheck = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);

            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    };
    return (
        <div
            className='App'
            style={{
                padding: 32,
            }}>
            {courses.map((course) => (
                <div key={course.id}>
                    <input
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                        type='checkbox'
                        id=''
                    />
                    {course.name}
                </div>
            ))}
        </div>
    );
}
export default App;
