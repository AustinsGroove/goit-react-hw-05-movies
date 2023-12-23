import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    form: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      backgroundColor: '#e0ddecc5',
      borderRadius: '5px',
      margin: '10px 25px 10px 10px',
      padding: '10px',
    },
    input: {
      font: 'inherit',
      fontSize: '20px',
      border: 'none',
      borderRadius: '5px',
      outline: 'none',
      paddingLeft: '4px',
      paddingRright: '4px',
    },
    'input::placeholder': {
      font: 'inherit',
      fontSize: '18px',
    },
    button: {
      width: 100,
      padding: 10,
      borderRadius: 5,
      border: 0,
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
      },
    },
  };
});

export default Wrapper;
