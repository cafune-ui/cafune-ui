import { Router } from 'preact-router';
import Index from './pages/index';
import 'cafune/style/index';
import './style';

export const App = () => (
  <Router>
    <Index path="/" />
  </Router>
);

export default App;
