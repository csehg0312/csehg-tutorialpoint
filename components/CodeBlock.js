import React from 'react';

const CodeBlock = ({ children }) => (
  <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
    <code>
      {children}
    </code>
  </pre>
);

export default CodeBlock;
