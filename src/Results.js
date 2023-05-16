import React from 'react';

function Results({ data, onReset }) {
  return (
    <div>
      <p>{data}</p>
      <button onClick={onReset}>Start Again</button>
    </div>
  );
}

export default Results;