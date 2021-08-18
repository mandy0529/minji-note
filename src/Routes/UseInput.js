import React, {useState} from 'react';
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

function useInput(defaultValue, check) {
  const [value, setValue] = useState(defaultValue);
  const onChange = (event) => {
    const {value} = event.target;
    let update = null;
    if (typeof check === 'function') {
      update = check(value);
    }
    if (update) {
      setValue(value);
    }
  };
  return {value, onChange};
}

const UseTitle = () => {
  const check = (value) =>
    !value.includes('@') && !value.includes('#') && !value.includes('!');
  const email = useInput('ms.', check);
  return (
    <Container>
      <Div>
        <h1>minji hooks</h1>
        <input {...email} placeholder="write your name"></input>
        <button>입력</button>
      </Div>

      <Pre>{`import React, {useState} from 'react';

function useInput(defaultValue, check) {
  const [value, setValue] = useState(defaultValue);
  const onChange = (event) => {
    const {value} = event.target;
    let update = null;
    if (typeof check === 'function') {
      update = check(value);
    }
    if (update) {
      setValue(value);
    }
  };
  return {value, onChange};
}

const App = () => {
  const check = (value) =>
    !value.includes('@') && !value.includes('#') && !value.includes('!');
  const email = useInput('ms.', check);
  return (
    <>
      <h1>minji hooks</h1>
      <input {...email} placeholder="write your name"></input>
      <button>입력</button>
    </>
  );
};

export default App;`}</Pre>
    </Container>
  );
};

export default UseTitle;
