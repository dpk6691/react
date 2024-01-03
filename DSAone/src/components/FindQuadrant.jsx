import React, { useState } from 'react';

const QuadrantFinder = () => {
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [quadrant, setQuadrant] = useState(null);

  const handleInputChange = (e, coordinate) => {
    const value = e.target.value;
    coordinate === 'x' ? setX(value) : setY(value);
  };

  const findQuadrant = () => {
    const parsedX = parseFloat(x);
    const parsedY = parseFloat(y);

    if (isNaN(parsedX) || isNaN(parsedY)) {
      alert('Please enter valid numbers for both coordinates.');
      return;
    }

    if (parsedX === 0 || parsedY === 0) {
      setQuadrant(null); // Point lies on an axis
    } else if (parsedX > 0 && parsedY > 0) {
      setQuadrant(1);
    } else if (parsedX < 0 && parsedY > 0) {
      setQuadrant(2);
    } else if (parsedX < 0 && parsedY < 0) {
      setQuadrant(3);
    } else if (parsedX > 0 && parsedY < 0) {
      setQuadrant(4);
    }
  };

  return (
    <div>
      <label>
        Enter x coordinate:
        <input type="text" value={x} onChange={(e) => handleInputChange(e, 'x')} />
      </label>
      <br />
      <label>
        Enter y coordinate:
        <input type="text" value={y} onChange={(e) => handleInputChange(e, 'y')} />
      </label>
      <br />
      <button onClick={findQuadrant}>Find Quadrant</button>
      <br />
      {quadrant !== null && <div>Point lies in Quadrant {quadrant}</div>}
    </div>
  );
};

export default QuadrantFinder;
