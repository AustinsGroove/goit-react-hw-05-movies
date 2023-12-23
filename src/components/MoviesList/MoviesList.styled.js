import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    ul: {
      display: 'grid',
      maxWidth: 'calc(100vw - 40px)',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gridGap: '30px',
      marginBottom: '40px',
      paddingLeft: '20px',
      paddingRight: '25px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    li: {
      width: '320px',
      backgroundColor: '#e0ddecc5',
      overflow: 'hidden',
      borderRadius: '5px',
      transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow:
        '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    },
    'li:hover': {
      transform: 'scale(1.05)',
    },
  };
});

export default Wrapper;
