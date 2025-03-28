import React, { useState } from 'react';
import { ArrowButton } from './ArrowButton';

export default {
  title: 'ArrowButton',
  component: ArrowButton,
};

export const Default = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <ArrowButton onClick={handleClick} isMenuOpen={isMenuOpen} />
  );
};
