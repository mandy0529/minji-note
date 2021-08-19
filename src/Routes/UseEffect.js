import React, {useState, useEffect} from 'react';
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

const Number = styled.h1`
  color: teal;
  border: 10px;
  font-weight: bold;
`;

const UseEffect = () => {
  const sayHello = () => {
    console.log('hello, minji!');
  };
  const [number, setNumber] = useState(0);

  const handlePlus = () => {
    setNumber(number + 1);
  };
  const handleMinus = () => {
    setNumber(number - 1);
  };
  useEffect(sayHello, [number]);
  return (
    <Container>
      <Div>
        <h1>3. 1씩 더하고 빼기</h1>
        <Number>{number < 0 ? 0 : number}</Number>

        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </Div>
      <Pre>
        {`import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const UseEffect = () => {
  const sayHello = () => {
    console.log('hello, minji!');
  };
  const [number, setNumber] = useState(0);

  const handlePlus = () => {
    setNumber(number + 1);
  };
  const handleMinus = () => {
    setNumber(number - 1);
  };
  useEffect(sayHello, [number]);
  return (
    <Container>
      <Div>
      <h1>{number < 0 ? 0 : number}</h1>
      
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </Div>
    </Container>
  );
};

export default Minji;

export default UseEffect;
`}
      </Pre>
    </Container>
  );
};

export default UseEffect;
