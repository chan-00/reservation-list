import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import page component
import Main from './component/page/main';
import Create from './component/page/create';
import Edit from './component/page/edit';

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
};
