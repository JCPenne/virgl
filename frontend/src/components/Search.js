import React from 'react';
import { Container, TextField, Button } from '@mui/material';

export function Search() {
  const [currentValue, setCurrentValue] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(currentValue);
  }

  return (
    <Container
      maxWidth='sm'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={event => handleSubmit(event)}>
        <TextField
          id='outlined-basic'
          label='name'
          variant='outlined'
          value={currentValue}
          onChange={e => setCurrentValue(e.target.value)}
        />
        <Button type='submit'>Search</Button>
      </form>
    </Container>
  );
}
