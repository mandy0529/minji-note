import {useRef} from 'react';
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

const UseForFullscreen = (onFull) => {
  const checkFunction = (isFunction) => {
    if (typeof onFull === 'function') {
      onFull(isFunction);
    }
  };
  const element = useRef();
  const fullscreenMode = () => {
    const {current} = element;
    const fullScreen = document.fullscreenElement;
    if (fullScreen) {
      document.exitFullscreen();
      current.children[1].innerText = 'full';
      checkFunction(false);
    } else {
      current.requestFullscreen();
      current.children[1].innerText = 'exit';
      checkFunction(true);
    }
  };
  return {element, fullscreenMode};
};

const UseFullscreen = () => {
  const onFull = (isFull) => {
    console.log(isFull ? "i'm full!" : "i'm small");
  };
  const {element, fullscreenMode} = UseForFullscreen(onFull);

  return (
    <Container>
      <Div>
        <div ref={element}>
          <h1>10. 전체화면, 스몰화면 해보기</h1>
          <img src="dog.jpeg" width="500px" height="700px"></img>
          <button onClick={fullscreenMode}>full</button>
        </div>
      </Div>
      <Pre>
        {`
        import {useRef} from 'react';
        import styled from 'styled-components';
        
        const UseForFullscreen = (onFull) => {
          const checkFunction = (isFunction) => {
            if (typeof onFull === 'function') {
              onFull(isFunction);
            }
          };
          const element = useRef();
          const fullscreenMode = () => {
            const {current} = element;
            const fullScreen = document.fullscreenElement;
            if (fullScreen) {
              document.exitFullscreen();
              current.children[1].innerText = 'full';
              checkFunction(false);
            } else {
              current.requestFullscreen();
              current.children[1].innerText = 'exit';
              checkFunction(true);
            }
          };
          return {element, fullscreenMode};
        };
        
        const UseFullscreen = () => {
          const onFull = (isFull) => {
            console.log(isFull ? "i'm full!" : "i'm small");
          };
          const {element, fullscreenMode} = UseForFullscreen(onFull);
        
          return (
            <Container>
              <Div ref={element}>
                <img src="dog.jpeg" width="500px" height="700px"></img>
                <button onClick={fullscreenMode}>full</button>
              </Div>
            </Container>
          );
        };
        
        export default UseFullscreen;`}
      </Pre>
    </Container>
  );
};

export default UseFullscreen;
