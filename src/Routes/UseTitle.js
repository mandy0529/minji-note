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

const UseforTitle = (defaultTitle) => {
  const [title, setTitle] = useState(defaultTitle);
  const htmlTitleUpdate = () => {
    const titleHtml = document.querySelector('title');
    titleHtml.innerText = title;
  };
  useEffect(htmlTitleUpdate, [title]);
  return setTitle;
};

const UseTitle = () => {
  const titleUpdate = UseforTitle('...loading');
  const handleClick = () => {
    titleUpdate('changed!');
  };
  return (
    <Container>
      <Div>
        <h1>hi</h1>
        <button onClick={handleClick}>change</button>
      </Div>
      <Pre>
        {`
        import React, {useState} from 'react';
        import styled from 'styled-components';
        
        const useforTitle = (defaultTitle) => {
          const [title, setTitle] = useState(defaultTitle);
          const htmlTitleUpdate = () => {
            const titleHtml = document.querySelector('title');
            titleHtml.innerText = title;
          };
          useEffect(htmlTitleUpdate, [title]);
          return setTitle;
        };
        
        const UseTitle = () => {
          const titleUpdate = useforTitle('...loading');
          const handleClick = () => {
            titleUpdate('changed!');
          };
          return (
            <Container>
              <Div >
              <h1>hi</h1>
                <button onClick={handleClick}>change</button>
              </Div>
            </Container>
          );
        };
      
        export default UseTitle;
        `}
      </Pre>
    </Container>
  );
};

export default UseTitle;
