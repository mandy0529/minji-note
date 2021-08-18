import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  all: unset;
  display: flex;
  overflow-x: auto;
  padding: 10px;
  background-color: black;
  color: white;
`;
const Li = styled.li`
  all: unset;
  margin: 0 10px;
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  border: 3px solid transparent;
  transition: all 300ms ease-in-out;
  border-radius: 10px;
  &:hover {
    background-color: white;
    border: 3px solid white;
  }
`;
const Alink = styled(Link)`
  text-decoration: none;
  color: white;
  outline: none;
  background-color: transparent;
  list-style: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

function Header() {
  return (
    <Ul>
      <Li>
        <Alink to="/input">useInput</Alink>
      </Li>
      <Li>
        <Alink to="/tabs">useTabs</Alink>
      </Li>
      <Li>
        <Alink to="/effect">useEffect</Alink>
      </Li>
      <Li>
        <Alink to="/title">useTitle</Alink>
      </Li>
      <Li>
        <Alink to="/scroll">useScroll</Alink>
      </Li>
      <Li>
        <Alink to="/ref">useRef</Alink>
      </Li>
      <Li>
        <Alink to="/prevent">usePreventLeave</Alink>
      </Li>
      <Li>
        <Alink to="/notification">useNotification</Alink>
      </Li>
      <Li>
        <Alink to="/network">useNetwork</Alink>
      </Li>
      <Li>
        <Alink to="/full/screen">useFullScreen</Alink>
      </Li>
      <Li>
        <Alink to="/fadein">useFaceIn</Alink>
      </Li>
      <Li>
        <Alink to="/confirm">useConfirm</Alink>
      </Li>
      <Li>
        <Alink to="/click">useClick</Alink>
      </Li>
      <Li>
        <Alink to="/before">useBeforeLeave</Alink>
      </Li>
      <Li>
        <Alink to="/network">useNetwork</Alink>
      </Li>
      <Li>
        <Alink to="/axios">useAxios</Alink>
      </Li>
    </Ul>
  );
}

export default Header;
