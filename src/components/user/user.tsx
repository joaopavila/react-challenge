import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faCheckDouble,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';

const User = () => (
  <>
    <S.User>
      <S.Img src="https://randomuser.me/api/portraits/men/75.jpg" />
      <S.UserName>Lorraine</S.UserName>
      <S.Infos>lorraine@gmail.com</S.Infos>
      <S.Infos>(xx) xxxxx-xxxx</S.Infos>
      <S.Infos>Uberlandia - MG</S.Infos>
      <S.Actions>
        <p>
          <FontAwesomeIcon icon={faUsers} />
        </p>
        <p>
          <FontAwesomeIcon icon={faCheckDouble} />
        </p>
        <p>
          <FontAwesomeIcon icon={faTrash} />
        </p>
      </S.Actions>
    </S.User>
  </>
);

export default User;
