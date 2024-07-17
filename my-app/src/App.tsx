import Router from './Router';
import { Themes } from './themes/type';

export type Props = {
  theme?: Themes;
};

const App = () => {
  return (
    <>
      <Router />
    </>
  );
};

export default App;
