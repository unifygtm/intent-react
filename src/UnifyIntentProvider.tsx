import { UnifyIntentClient } from '@unifygtm/intent-client';
import React, { PropsWithChildren, useEffect, useState } from 'react';

interface UnifyIntentContextShape {
  client: UnifyIntentClient | null;
}

const defaultContext: UnifyIntentContextShape = {
  client: null,
};

export const UnifyIntentContext =
  React.createContext<UnifyIntentContextShape>(defaultContext);
UnifyIntentContext.displayName = 'UnifyIntentContext';

export type UnifyIntentProviderProps = PropsWithChildren<{
  /**
   * The client instance to make available with this provider.
   */
  intentClient: UnifyIntentClient;
}>;

const UnifyIntentProvider = ({
  intentClient,
  children,
}: UnifyIntentProviderProps) => {
  const [client] = useState<UnifyIntentClient>(intentClient);

  useEffect(() => {
    client.mount();

    return () => {
      client.unmount();
    };
  }, []);

  return (
    <UnifyIntentContext.Provider value={{ client }}>
      {children}
    </UnifyIntentContext.Provider>
  );
};

export default UnifyIntentProvider;
