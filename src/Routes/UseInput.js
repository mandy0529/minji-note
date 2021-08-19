import React, {useState} from 'react';
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

const UseForInput = (defaultValue, controller) => {
  const [value, setValue] = useState(defaultValue);
  const handleSubmit = (event) => {
    const {value} = event.target;
    let update = null;
    if (typeof controller === 'function') {
      update = controller(value);
    }
    if (update) {
      setValue(value);
    }
  };
  return {value, handleSubmit};
};
const UseInput = () => {
  const controller = (value) => !value.includes('@');
  const {value, handleSubmit} = UseForInput('ms.', controller);
  return (
    <Container>
      <Div>
        <h1>1. @ 안써지는 input 확인하기</h1>
        <input
          value={value}
          onChange={handleSubmit}
          placeholder="write your name"
        ></input>
      </Div>
      <Pre>
        {`import React, {useState} from 'react';
import styled from 'styled-components';

const UseForInput = (defaultValue, controller) => {
  const [value, setValue] = useState(defaultValue);
  const handleSubmit = (event) => {
    const {value} = event.target;
    let update = null;
    if (typeof controller === 'function') {
      update = controller(value);
    }
    if (update) {
      setValue(value);
    }
  };
  
  return {value, handleSubmit};
};

const UseInput = () => {
  const controller = (value) => !value.includes('@');
  const {value, handleSubmit} = UseForInput('ms.', controller);

  return (
    <Container>
      <Div>
        <h1>use input</h1>
        <input
          value={value}
          onChange={handleSubmit}
          placeholder="write your name"
        ></input>
      </Div>
    </Container>
  );
};

export default UseInput;
`}
      </Pre>
    </Container>
  );
};

export default UseInput;
