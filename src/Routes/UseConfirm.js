import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Pre = styled.pre`
  padding: 20px;
  border: 5px solid black;
  border-top: 40px solid black;
  border-radius: 10px;
  font-size: 15px;
  margin: 20px;
`;

const Div = styled.div`
  margin: 100px;
`;

const UseForConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== 'function') {
    return;
  }
  if (!onCancel || typeof onCancel !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const deletion = () => {
  console.log('deleting all things...');
  return deletion;
};
const rejection = () => {
  console.log("rejected. din't change anything");
  return rejection;
};

const UseConfirm = () => {
  const confirmDeleteMessage = UseForConfirm(
    'are you sure?',
    deletion,
    rejection
  );
  return (
    <Container>
      <Div>
        <h1>12. 버튼 누르면 뜨는 알림창 확인하기! </h1>
        <button onClick={confirmDeleteMessage}>delete all things</button>
      </Div>
      <Pre>
        {`
import styled from 'styled-components';

const UseForConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== 'function') {
    return;
  }
  if (!onCancel || typeof onCancel !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const deletion = () => {
  console.log('deleting all things...');
  return deletion;
};
const rejection = () => {
  console.log("rejected. din't change anything");
  return rejection;
};

const UseConfirm = () => {
  const confirmDeleteMessage = UseForConfirm('are you sure?', deletion, rejection);
  return (
    <Container>
      <Div>
      <h1>hi i am minji, </h1>
        <button onClick={confirmDeleteMessage}>delete all things</button>
      </Div>
    </Container>
  );
};

export default UseConfirm;`}
      </Pre>
    </Container>
  );
};

export default UseConfirm;
