import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as S from './globalStyles';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import AllPeoples from './pages/allPeoples/AllPeoples';
import Trash from './pages/trash/Trash';
import Attended from './pages/attended/Attended';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <S.Section>
        <Sidebar />
        <S.Container>
          <Switch>
            <Route path="/trash" component={Trash} />
            <Route path="/attended" component={Attended} />
            <Route path="/" exact component={AllPeoples} />
          </Switch>
        </S.Container>
      </S.Section>
    </BrowserRouter>
  );
};

export default Routes;
