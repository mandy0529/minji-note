import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import defaultAxios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Div = styled.div`
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
const Icon = styled.h1`
  color: tomato;
`;
const useForAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);
  if (!options.url) {
    return;
  }
  return {...state, refetch};
};

const UseAxios = () => {
  const {loading, error, data, refetch} = useForAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  });
  console.log(
    `loading:${loading}\nerror : ${error}\ndata : ${JSON.stringify(data)}`
  );
  return (
    <Container>
      <Div>
        <h1>16. axios 가져오는지 콘솔에서 확인</h1>
        <Icon>{data && data.status}</Icon>
        <Icon>{loading && 'loading'}</Icon>
        <button onClick={refetch}>refetch</button>
      </Div>
      <Pre>
        {`import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import defaultAxios from 'axios';

const axios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });
        setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);
  if (!options.url) {
    return;
  }
  return {...state, refetch};
};

const UseAxios = () => {
  const {loading, error, data, refetch} = axios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  });
  console.log(
    'loading:{loading}error : {error}ndata : {JSON.stringify(data)}'
  );
  return (
    <Container>
      <div>
      <h1>{data && data.status}</h1>
      <h1>{loading && 'loading'}</h1>
        <button onClick={refetch}>refetch</button>
      </div>
    </Container>
  );
};

export default UseAxios;
`}
      </Pre>
    </Container>
  );
};

export default UseAxios;
