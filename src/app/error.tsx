'use client';

import { FC } from 'react';

const error = ({
  error,
  reset
}: {
  error: Error,
  reset: () => void
}) => {
  return (
  <div>
    <div>Error: {error.message}</div>
    <button onClick={reset}>Reset</button>
  </div>
  )
}

export default error;