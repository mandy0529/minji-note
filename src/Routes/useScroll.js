import {useEffect, useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  height: 1000vh;
  width: 1000vh;
`;

const Pre = styled.pre`
  padding: 20px;
  border: 5px solid black;
  border-top: 40px solid black;
  border-radius: 10px;
  font-size: 15px;
  margin: 20px;
  position: fixed;
  right: 0;
`;

const Div = styled.div`
  margin: 100px;
`;

const UseForScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({x: window.scrollX, y: window.scrollY});
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  return state;
};

const UseScroll = () => {
  const {x, y} = UseForScroll();
  return (
    <Container>
      <Div>
        <h2
          style={{
            position: 'fixed',
            color: y > 500 ? 'red' : 'blue',
            backgroundColor: x > 500 ? 'teal' : 'gold',
          }}
        >
          5. 스크롤하면 어떻게 바뀌는지 확인하기!
        </h2>
      </Div>
      <Pre>{`
      import {useEffect, useState} from 'react';
      import styled from 'styled-components';
      
      const UseForScroll = () => {
        const [state, setState] = useState({
          x: 0,
          y: 0,
        });
        const onScroll = () => {
          setState({x: window.scrollX, y: window.scrollY});
        };
        useEffect(() => {
          window.addEventListener('scroll', onScroll);
          return () => window.removeEventListener('scroll', onScroll);
        });
        return state;
      };
      
      const UseScroll = () => {
        const {x, y} = UseForScroll();
        return (
          <Container>
            <Div>
              <h1
                style={{
                  position: 'fixed',
                  color: y > 500 ? 'red' : 'blue',
                  backgroundColor: x > 500 ? 'teal' : 'gold',
                }}
              >
                minji
              </h1>
            </Div>
          </Container>
        );
      };
      
      export default UseScroll;
      
      `}</Pre>
    </Container>
  );
};

export default UseScroll;
