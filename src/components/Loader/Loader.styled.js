import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    display: 'flex',
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  };
});

export default Wrapper;
