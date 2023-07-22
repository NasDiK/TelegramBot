import dotenv from 'dotenv';

export const injectEnvVariables = () => {
  const envParams = dotenv.config().parsed;

  process.env = {...envParams, ...process.env};
};