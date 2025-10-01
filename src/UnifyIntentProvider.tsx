import { UnifyIntentClient } from '@unifygtm/intent-client';
import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';

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
  const [_, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    client.mount();

    // Force a re-render after the client mounts
    setIsMounted(true);

    return () => {
      client.unmount();
    };
  }, []);

  const value: UnifyIntentContextShape = useMemo(
    () => ({
      client,
    }),
    [client],
  );

  return (
    <UnifyIntentContext.Provider value={value}>
      {children}
    </UnifyIntentContext.Provider>
  );
};

export default UnifyIntentProvider;
