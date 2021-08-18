import {HashRouter, Route} from 'react-router-dom';
import Header from './Header';
import UseTitle from '../Routes/UseTitle';
import UseTabs from '../Routes/UseTabs';
import UseScroll from '../Routes/useScroll';
import UseRef from '../Routes/UseRef';
import UsePreventLeave from '../Routes/UsePreventLeave';
import UseNotification from '../Routes/UseNotification';
import UseNetwork from '../Routes/UseNetwork';
import UseInput from '../Routes/UseInput';
import UseFullScreen from '../Routes/UseFullScreen';
import UseFadeIn from '../Routes/UseFadeIn';
import UseEffect from '../Routes/UseEffect';
import UseConfirm from '../Routes/UseConfirm';
import UseClick from '../Routes/UseClick';
import UseBeforeLeave from '../Routes/UseBeforeLeave';
import UseAxios from '../Routes/UseAxios';

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Route path="/title" component={UseTitle} />
      <Route path="/tabs" component={UseTabs} />
      <Route path="/scroll" component={UseScroll} />
      <Route path="/ref" component={UseRef} />
      <Route path="/prevent" component={UsePreventLeave} />
      <Route path="/notification" component={UseNotification} />
      <Route path="/network" component={UseNetwork} />
      <Route path="/input" component={UseInput} />
      <Route path="/full/screen" component={UseFullScreen} />
      <Route path="/fadein" component={UseFadeIn} />
      <Route path="/effect" component={UseEffect} />
      <Route path="/confirm" component={UseConfirm} />
      <Route path="/before" component={UseBeforeLeave} />
      <Route path="/axios" component={UseAxios} />
      <Route path="/click" component={UseClick} />
    </HashRouter>
  );
};
export default Router;
