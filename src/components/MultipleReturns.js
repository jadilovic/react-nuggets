import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Button onClick={() => setLoading(false)}>Click to finish loading</Button>
    );
  }
  return <h4>Multiple Returns</h4>;
};

export default MultipleReturns;
