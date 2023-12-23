import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    '.actorInfo': {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      alignItems: 'center',
    },
  };
});

export default Wrapper;
