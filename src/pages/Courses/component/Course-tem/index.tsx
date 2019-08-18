import React from 'react';
import './index.css';

import { Course } from '../../../../store/ducks/courses/types';

interface Props {
  course: Course
}

// import JsLogo from '../../../../assets/img/js-logo.png';

export default ({ course }: Props) => (
  <div className="curso-item-page">
    {/* <img src={JsLogo} alt="imagem" className="" /> */}
    <h3>{course.name}</h3>
    <p>
      <strong>Descrição:</strong>
      {course.description}
    </p>
    <p>
      <strong>Preço: </strong>
      R$&nbsp;
      {course.price.toFixed(2)}
    </p>
    <p>
      <strong>Prof:</strong>
      &nbsp;
      {course.teacher}
    </p>
  </div>
);
