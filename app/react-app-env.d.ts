/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="react-scripts" />

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

declare module '*.avif' {
  const src: string;
  export default src;
}
