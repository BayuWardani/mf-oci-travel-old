import { registerApplication, start } from 'single-spa';

registerApplication(
  '@oci/tranvel-old-cra', // Name of this single-spa application
  () => import('./root.app'), // Our loading function
  () => true, // Our activity function
);

start()
