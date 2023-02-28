import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { PortfolioDesktop2545 } from './components/PortfolioDesktop2545/PortfolioDesktop2545.js';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <PortfolioDesktop2545 />
    </div>
  );
});
