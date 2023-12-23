import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: '1100',
    display: 'flex',
    alignItems: 'center',
    minHeight: '64px',
    paddingRight: '50px',
    paddingLeft: '50px',
    paddingTop: '12px',
    paddingBottom: '12px',
    color: '#fff',
    backgroundColor: '#e0ddecc5',
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    ul: {
      display: 'flex',
      gap: '24px',
      li: {
        button: {
          textTransform: 'capitalize',
          width: 100,
          padding: 10,
          borderRadius: 5,
          border: 0,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
          },
        },
        '.active button': {
          backgroundColor: 'rgba(255, 0, 0, 0.2)',
        },
      },
    },
  };
});

export default Wrapper;
