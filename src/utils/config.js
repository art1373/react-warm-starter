import envObject from './env';

const env = envObject || {};

export const { apiUrl } = env;

export const { port } = env;

export const { nodeEnv } = env;
