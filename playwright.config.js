import { devices } from '@playwright/test';
import { globalConfig } from './config/global.config';
import { devConfig } from './config/dev-config';
 
// Function to load the environment-specific configuration based on the selected environment
const loadConfig = (env) => {
  
  return { ...globalConfig, ...devConfig };
};
// Define the environment to be used
const environment = process.env.NODE_ENV || 'test';
 
// Load the configuration based on the selected environment
const config = loadConfig(environment);
 
export default config;