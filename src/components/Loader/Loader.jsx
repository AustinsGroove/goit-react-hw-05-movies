import { Oval } from 'react-loader-spinner';
import Wrapper from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <div className="loader">
        <Oval />
      </div>
    </Wrapper>
  );
};

export default Loader;
