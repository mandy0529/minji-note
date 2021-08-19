import {useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
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
const Icon = styled.h1`
  color: teal;
`;
const UseForBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const {clientY} = event;
    if (clientY < 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
  if (typeof onBefore !== 'function') {
    return;
  }
};

const UseBeforeLeave = () => {
  const messageLeave = () => {
    console.log('you are left');
  };
  UseForBeforeLeave(messageLeave);
  return (
    <Container>
      <Div>
        <h1>
          14. 페이지 떠나려고 윗창으로 마우스 커서 갔을때 콘솔에 출력되는지 확인
        </h1>
        <Icon>minji</Icon>
      </Div>
      <Pre>{`
      import {useEffect} from 'react';
      import styled from 'styled-components';
      
      const UseForBeforeLeave = (onBefore) => {
        const handle = (event) => {
          const {clientY} = event;
          if (clientY < 0) {
            onBefore();
          }
        };
        useEffect(() => {
          document.addEventListener('mouseleave', handle);
          return () => document.removeEventListener('mouseleave', handle);
        }, []);
        if (typeof onBefore !== 'function') {
          return;
        }
      };
      
      const UseBeforeLeave = () => {
        const messageLeave = () => {
          console.log('you are left');
        };
        UseForBeforeLeave(messageLeave);
        return (
          <Container>
            <Div>
            <h1>minji</h1>
      
            </Div>
          </Container>
        );
      };
      
      export default UseBeforeLeave;
      `}</Pre>
    </Container>
  );
};

export default UseBeforeLeave;
