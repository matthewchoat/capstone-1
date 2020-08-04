import React from 'react';
import { ProductProvider, PackProvider, ModalProvider } from './';

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
}

function StateProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[<ProductProvider />, <PackProvider />, <ModalProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

export { StateProvider };
