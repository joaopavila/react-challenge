import React from 'react';

import Routes from './Routes';

const App = () => {
  return (
    <>
      <React.Suspense fallback={<div>Carregando...</div>}>
        <Routes />
      </React.Suspense>
    </>
  );
};

export default App;
