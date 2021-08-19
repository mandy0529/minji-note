import {useEffect, useRef} from 'react';
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
const UseForFadeIn = (duration = 0, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const {current} = element;
      current.style.transition = `all ${duration}s ease-out ${delay}s`;
      current.style.opacity = 1;
    }
  });
  if (typeof duration !== 'number' || typeof delay !== 'number') {
    return;
  }
  return {ref: element, style: {opacity: 0}};
};

const UseFadeIn = () => {
  const ele = UseForFadeIn(1, 3);
  const ele2 = UseForFadeIn(3, 6);
  return (
    <Container>
      <Div>
        <h1>11. 몇초후 fade in 일어나는거 확인</h1>
        <Icon {...ele}>minji</Icon>
        <Icon {...ele2}>hello</Icon>
      </Div>
      <Pre>
        {`
        import {useEffect,, useRef} from 'react';
        import styled from 'styled-components';
        
        const UseForFadeIn = (duration = 0, delay = 0) => {
          const element = useRef();
          useEffect(() => {
            if (element.current) {
              const {current} = element;
              current.style.transition = 'all {duration}s ease-out {delay}s';
              current.style.opacity = 1;
            }
          });
          if (typeof duration !== 'number' || typeof delay !== 'number') {
            return;
          }
          return {ref: element, style: {opacity: 0}};
        };
        
        const UseFadeIn= () => {
          const ele = UseForFadeIn(1, 3);
          const ele2 = UseForFadeIn(3, 6);
          return (
            <Container>
              <Div>
              <h1 {...ele}>minji</h1>
                <h2 {...ele2}>hello</h2>
              </Div>
            </Container>
          );
        };
        
        export default UseFadeIn; 
        `}
      </Pre>
    </Container>
  );
};

export default UseFadeIn;
