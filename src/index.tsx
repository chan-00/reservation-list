import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { App } from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
