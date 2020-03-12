import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Head() {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
