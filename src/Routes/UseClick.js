import {useEffect, useRef} from 'react';
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

const UseForClick = (onClick) => {
  const btn = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    if (btn.current) {
      btn.current.addEventListener('click', onClick);
    }
    return () => {
      if (btn.current) {
        btn.current.removeEventListener('click', onClick);
      }
    };
  }, []);
  return typeof onClick === 'function' ? btn : undefined;
};

const UseClick = () => {
  const 무야호 = () => {
    console.log('무야호');
  };
  const title = UseForClick(무야호);
  return (
    <Container>
      <Div>
        <h1>13. 클릭했을때 무야호 출력하는 함수 실행!</h1>
        <button ref={title}>click</button>
      </Div>
      <Pre>
        {`import {useEffect, useState, useRef} from 'react';
            import styled from 'styled-components';

const UseForClick = (onClick) => {
  const btn = useRef();
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    if (btn.current) {
      btn.current.addEventListener('click', onClick);
    }

    return () => {
      if (btn.current) {
        btn.current.removeEventListener('click', onClick);
      }
    };
  }, []);

  return typeof onClick === 'function' ? btn : undefined;
};

const UseClick = () => {
  const 무야호 = () => {
    console.log('무야호');
  };
  const title = UseForClick(무야호);

  return (
    <Container>
      <Div>
      <h1>hi</h1>
        <button ref={title}>click</button>
      </Div>
    </Container>
  );
};

export default UseClick;`}
      </Pre>
    </Container>
  );
};

export default UseClick;
