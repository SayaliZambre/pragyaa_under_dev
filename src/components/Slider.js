import React from 'react';
import ReactSlidy from 'react-slidy';
import 'react-slidy/lib/index.scss';
import 'react-slidy/lib/styles.css';

const Number = ({ num }) => (
  <div className="slide-content">
    <h2>{num}</h2>
  </div>
);

function Slider() {
  return (
    <div className="App">
      <ReactSlidy infiniteLoop>
        <Number num={1} />
        <Number num={2} />
        <Number num={3} />
        <Number num={4} />
        <Number num={5} />
      </ReactSlidy>
    </div>
  );
}

export default Slider;
