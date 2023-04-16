import React from 'react';

const Instructions = ({ instructions }) => {
  return (
    <div>
      <h4>Steps:</h4>
      <ol>
        {instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
