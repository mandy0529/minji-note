import React, {useEffect, useState} from 'react';
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

const tabs = [
  {
    date: 'weekday',
    todo: '👩🏻‍💻 working, studying, working out',
  },
  {
    date: 'weekend',
    todo: '🏄‍♂️ to go anywhere I wanna',
  },
];

const UseForTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {current: allTabs[currentIndex], change: setCurrentIndex};
};

const UseTabs = () => {
  const {current, change} = UseForTabs(0, tabs);
  return (
    <Container>
      <Div>
        <h1>2. use tabs = 배열로 담은 값 버튼누르면 각각 나오게하기</h1>
        <h2>what are you doing this day?</h2>
        <div>
          {tabs.map((tab, index) => (
            <button onClick={() => change(index)}>{tab.date}</button>
          ))}
        </div>
        <h2> {current.todo}</h2>
      </Div>
      <Pre>
        {`import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const tabs = [
  {
    date: 'weekday',
    todo: '👩🏻‍💻 working, studying, working out',
  },
  {
    date: 'weekend',
    todo: '🏄‍♂️ to go anywhere I wanna',
  },
];

const UseForTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {current: allTabs[currentIndex], change: setCurrentIndex};
};

const UseTabs = () => {
  const {current, change} = UseForTabs(0, tabs);
  return (
    <>
      <h1>what are you doing this day?</h1>
      <div>
        {tabs.map((tab, index) => (
          <button onClick={() => change(index)}>{tab.date}</button>
        ))}
      </div>
      <h2> {current.todo}</h2>
    </>
  );
};

export default UseTabs;
`}
      </Pre>
    </Container>
  );
};

export default UseTabs;
