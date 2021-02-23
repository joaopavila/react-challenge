import * as S from './globalStyles';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

const App = () => {
  return (
    <>
      <Header />
      <S.Section>
        <Sidebar />
      </S.Section>
    </>
  );
};

export default App;
