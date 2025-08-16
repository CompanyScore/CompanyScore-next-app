import React from 'react';

export const withTheme = (Story: any, context: any) => {
  const theme = context.globals.theme;

  return (
    <div
      className={theme === 'dark' ? 'dark' : ''}
      style={{
        minHeight: '100vh',
        padding: '1rem',
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      <Story />
    </div>
  );
};
