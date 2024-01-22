import"./TabStyle.css"
import React, { useState } from 'react';
export const Tab = ({ id, label, isActive, onClick }) => (
    <button className={`tab ${isActive ? 'active' : ''}`} onClick={() => onClick(id)}>
      {label}
    </button>
  );
  