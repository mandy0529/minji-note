import {useEffect, useState} from 'react';
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
const Online = styled.h1`
  color: teal;
`;

const UseForNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);

    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);
  return status;
};

const UseNetwork = () => {
  const onOffLineConsole = (onLine) => {
    console.log(onLine ? '✅ we went online' : '❌ we are on offline');
  };
  const onLine = UseForNetwork(onOffLineConsole);
  return (
    <Container>
      <Div>
        <h1>15. network offline, online 일때 상태 확인</h1>
        <Online>{onLine ? 'online' : 'offline'}</Online>
      </Div>
      <Pre>
        {`
        import {useEffect, useState} from 'react';
        import styled from 'styled-components';
        
        const UseForNetwork = (onChange) => {
          const [status, setStatus] = useState(navigator.onLine);
          const handleChange = () => {
            if (typeof onChange === 'function') {
              onChange(navigator.onLine);
            }
            setStatus(navigator.onLine);
          };
          useEffect(() => {
            window.addEventListener('online', handleChange);
            window.addEventListener('offline', handleChange);
        
            return () => {
              window.removeEventListener('online', handleChange);
              window.removeEventListener('offline', handleChange);
            };
          }, []);
          return status;
        };
        
        const UseNetwork = () => {
          const onOffLineConsole = (onLine) => {
            console.log(onLine ? '✅ we went online' : '❌ we are on offline');
          };
          const onLine = UseForNetwork(onOffLineConsole);
          return (
            <Container>
              <Div>
                <h1>{onLine ? 'online' : 'offline'}</h1>
              </Div>
            </Container>
          );
        };
        
        export default UseNetwork;
        `}
      </Pre>
    </Container>
  );
};

export default UseNetwork;
