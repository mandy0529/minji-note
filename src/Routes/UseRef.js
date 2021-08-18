import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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

const UseRef = () => {
  const minji = useRef('');
  const {current} = minji;
  useEffect(() => {
    setTimeout(() => {
      current && current.focus();
    }, 3000);
  });

  return (
    <Container>
      <Div>
        <h1>hi</h1>
        <input ref={potato} placeholder="write your name"></input>
      </Div>
      <Pre>
        {`import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

const UseRef = () => {
  const potato = useRef('');
  const {current} = potato;
  useEffect(() => {
    setTimeout(() => {
      current.focus();
    }, 3000);
  });

  return (
    <Container>
      <Div>
      <h1>hi</h1>
        <input ref={potato} placeholder="write your name"></input>
      </Div>
    </Container>
  );
};

export default UseRef;
`}
      </Pre>
    </Container>
  );
};

export default UseRef;
