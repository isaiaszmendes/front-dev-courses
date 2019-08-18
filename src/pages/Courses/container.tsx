import React from 'react';
import { Course } from '../../store/ducks/courses/types';

// Components
import CourseItem from './component/Course-tem';
import Filter from './component/Filter';

interface Props {
  courses: Course[]
}

export default ({ courses }: Props) => (
  <div id="courses-page">
    <Filter />
    <div id="courses-container">
      {
        courses.length !== 0 && courses.map((course) => (
          <CourseItem
            key={course.id}
            course={course}
          />
        ))
      }
    </div>
  </div>
);
