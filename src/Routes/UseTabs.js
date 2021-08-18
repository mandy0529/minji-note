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
const content = [
  {
    tab: 'cafe',
    content: 'why u thought that? you like cafe?',
  },
  {
    tab: 'home',
    content: 'home sweet home whenever, whoever!',
  },
];
const useForTabs = (currentTabs, allTabs) => {
  const [currentIndex, setcurrentIndex] = useState(currentTabs);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setcurrentIndex,
  };
};

const UseTabs = () => {
  const {currentItem, changeItem} = useForTabs(0, content);
  return (
    <Container>
      <Div>
        <h1> where do u concentrate on developeing programming study?</h1>
        <div>
          {content.map((btn, index) => (
            <button onClick={() => changeItem(index)}>{btn.tab}</button>
          ))}
        </div>
        <h1>{currentItem.content}</h1>
      </Div>
      <Pre>
        {`import React, {useState, useEffect} from 'react';
          import styled from 'styled-components';

const content = [
  {
    tab: 'cafe',
    content: 'why u thought that? you like cafe?',
  },
  {
    tab: 'home',
    content: 'home sweet home whenever, whoever!',
  },
];
const useForTabs = (currentTabs, allTabs) => {
  const [currentIndex, setcurrentIndex] = useState(currentTabs);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setcurrentIndex,
  };
};

const UseTabs = () => {
  const {currentItem, changeItem} = useForTabs(0, content);
  return (
    <Container>
      <Div>
      <h1> where do u concentrate on developeing programming study?</h1>
      <div>
        {content.map((btn, index) => (
          <button onClick={() => changeItem(index)}>{btn.tab}</button>
        ))}
      </div>
        <h1>{currentItem.content}</h1>
      </Div>
    </Container>
  );
};

export default UseTabs;
`}
      </Pre>
    </Container>
  );
};

export default UseTabs;
