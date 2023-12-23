import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    '.movieInfo': {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      minHeight: '90px',
      justifyContent: 'space-between',
      '.userScore': {
        textAlign: 'right',
        fontSize: '0.9rem',
      },
    },
  };
});

export default Wrapper;
