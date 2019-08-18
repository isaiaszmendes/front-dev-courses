import React from 'react';
import './index.css';

import CourseItem from '../Course-item';

export default props => (
    <div className='App-courses'>
        {props.courses.map((couse, i) => (
            <CourseItem
                key={i}
                title={couse.title}
                description={couse.description}
                value={couse.value}
            />
        ))}
    </div>
)