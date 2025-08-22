import React from 'react';

export const withTheme = (Story: any, context: any) => {
  const theme = context.globals.theme;

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Story />
    </div>
  );
};
