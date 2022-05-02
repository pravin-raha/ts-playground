import type { Config } from '@jest/types'
// async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: "ts-jest",
    // transform: process({
    //   '\\.tsx?$': 'ts-jest',
    //   '\\.jsx?$': 'babel-jest'
    // }),
    // moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/**/?(*.)+(test).[jt]s?(x)'],
    moduleDirectories: ['<rootDir>/node_modules', 'node_modules', 'src']
  }
};
