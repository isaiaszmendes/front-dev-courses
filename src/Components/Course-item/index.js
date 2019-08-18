import React from 'react';
import './index.css'

export default props => (
  
<div className='App-course-item'>
  <h1>{props.title}</h1>
  <p>{props.description}</p>
  <p>R$: {props.value.toFixed(2)}</p>
</div>
  
);