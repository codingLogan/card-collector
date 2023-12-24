import type {Config} from 'jest';

const config: Config = {
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  testPathIgnorePatterns: ["node_modules", "built"],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};

export default config;