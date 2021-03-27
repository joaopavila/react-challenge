import { GlobalStyles } from '../src/globalStyles';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
