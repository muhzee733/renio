import React from 'react';
import Link from 'next/link';

const Button = ({ title, className, link }) => {
  return (
    <Link href={link} passHref>
      <button className={className}>{title}</button>
    </Link>
  );
};

export default Button;
