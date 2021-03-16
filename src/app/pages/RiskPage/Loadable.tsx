/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const RiskPage = lazyLoad(
  () => import('./index'),
  module => module.RiskPage,
);
