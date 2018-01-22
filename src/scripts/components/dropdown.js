import React, { Component } from 'react';

const dropDown = ({option, onChange}) => (
  <select onChange={onChange}>
    {option.map((item, index) =>
      <option key={index} value={item}>{item}</option>
    )}
  </select>
)

export default dropDown;
