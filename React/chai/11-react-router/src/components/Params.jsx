import React from 'react'
import { useParams } from 'react-router-dom'

function Params() {
  const { id } = useParams();
  return (
    <h2 className='pt-20'>
      {id ? `Student id is : ${id}` : 'No student id provided'}
    </h2>
  );
}

export default Params;
