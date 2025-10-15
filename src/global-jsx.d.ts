/* eslint-disable @typescript-eslint/no-explicit-any */
// Provide a fallback JSX namespace for third-party type definitions that reference JSX.IntrinsicElements
// This avoids build-time errors when a library expects the global JSX namespace.

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export {};
