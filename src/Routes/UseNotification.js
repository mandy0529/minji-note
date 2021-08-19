import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 100px;
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

const UseForNotification = (title, options) => {
  if (!'notification' in window) {
    return;
  }
  const notification = () => {
    if (notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return notification;
};

const UseNotification = () => {
  const noti = UseForNotification(
    'today what we/re gonna have for lunch&dinner?',
    {body: '떡볶이!!!!! & 치킨 ? or 튀김'}
  );
  return (
    <Container>
      <Div>
        <h1>8. 밥 버튼 누르면 크롬알림창 오는거 확인</h1>
        <button onClick={noti}>밥</button>
      </Div>
      <Pre>
        {`
        import styled from 'styled-components';
        
        const UseForNotification = (title, options) => {
          if (!'notification' in window) {
            return;
          }
          const notification = () => {
            if (notification.permission !== 'granted') {
              Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                  new Notification(title, options);
                } else {
                  return;
                }
              });
            } else {
              new Notification(title, options);
            }
          };
          return notification;
        };
        
        const UseNotification = () => {
          const noti = UseForNotification(
            'today what we/re gonna have for lunch&dinner?',
            {body: '떡볶이!!!!! & 치킨 ? or 튀김'}
          );
          return (
            <Container>
              <Div >
                <button onClick={noti}>밥</button>
              </Div>
            </Container>
          );
        };
        
        export default UseNotification;
        `}
      </Pre>
    </Container>
  );
};

export default UseNotification;
