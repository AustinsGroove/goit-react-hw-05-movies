import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    padding: '20px 50px',

    h1: {
      fontStyle: 'italic',
      color: 'whitesmoke',
    },
  };
});

export default Wrapper;
