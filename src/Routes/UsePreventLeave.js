import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px;
`;
const Button = styled.button`
  all: unset;
  width: 120px;
  height: 30px;
  border: 3px solid black;
  text-align: center;
  transition: all 300ms ease-in-out;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  &:hover {
    background-color: black;
    color: white;
  }
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
const UseForPreventEvent = () => {
  const listner = (event) => {
    event.preventDefault();
    event.returnValue = '';
  };
  const enable = () => window.addEventListener('beforeunload', listner);
  const disable = () => window.removeEventListener('beforeunload', listner);
  return {enable, disable};
};

const UsePreventEvent = () => {
  const {enable, disable} = UseForPreventEvent();
  return (
    <Container>
      <Div>
        <h1>
          7. 페이지 나갈때 각 버튼 누르고 protected 이면 알림창 뜨고,
          unprotected 이면 알림창 X
        </h1>
        <Button onClick={enable}>protected</Button>
        <Button onClick={disable}>unprotected</Button>
      </Div>
      <Pre>
        {`
        import styled from 'styled-components';
         
        const UseForPreventEvent = () => {
          const listner = (event) => {
            event.preventDefault();
            event.returnValue = '';
          };
          const enable = () => window.addEventListener('beforeunload', listner);
          const disable = () => window.removeEventListener('beforeunload', listner);
          return {enable, disable};
        };
        
        const UsePreventEvent = () => {
          const {enable, disable} = UseForPreventEvent();
          return (
            <Container>
              <Div>
              <Button onClick={enable}>protected</Button>
                <Button onClick={disable}>unprotected</Button>
              </Div>
            </Container>
          );
        };
        
        export default UsePreventEvent;
        `}
      </Pre>
    </Container>
  );
};

export default UsePreventEvent;
