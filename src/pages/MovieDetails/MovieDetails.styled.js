import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    '.buttonWrapper': {
      //   backgroundColor: '#e0ddecc5',
      borderRadius: '5px',
      margin: '10px 25px 10px 10px',
      padding: '10px',
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
    '.movieInfo': {
      display: 'flex',
      gap: '20px',
      padding: '0 30px',
    },
    '.moviePosterBox': {
      minWidth: '150px',
      borderRadius: '5px',
      overflow: 'hidden',
    },
    '.movieDetails': {
      backgroundColor: '#e0ddecc5',
      borderRadius: '5px',
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      width: '100%',
    },
    '.additionalInfo': {
      margin: '20px 30px 20px 20px',
      backgroundColor: '#e0ddecc5',
      borderRadius: '5px',
      padding: '10px 30px',
      ul: {
        display: 'flex',
        gap: '10px',
        margin: '5px 0px',
      },
      '.active button': {
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
      },
    },
  };
});

export default Wrapper;
