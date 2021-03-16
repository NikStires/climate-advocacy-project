/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const EnergyPage = lazyLoad(
  () => import('./index'),
  module => module.EnergyPage,
);
