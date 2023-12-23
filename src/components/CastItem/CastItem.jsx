import { baseImageUrl } from 'api/config';
import defaultImg from 'img/defaultImage';
import Wrapper from './CastItem.styled';

const CastItem = ({ castItem }) => {
  const { profile_path, name, character } = castItem;
  return (
    <Wrapper>
      <div>
        <img
          src={profile_path ? `${baseImageUrl}${profile_path}` : defaultImg}
          alt={`${name} profile`}
        />
      </div>
      <div className="actorInfo">
        <h3>{name}</h3>
        <p>{character}</p>
      </div>
    </Wrapper>
  );
};

export default CastItem;
