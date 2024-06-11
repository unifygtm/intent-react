import {
  UnifyIntentClient,
  UnifyIntentClientConfig,
} from '@unifygtm/intent-client';
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
  writeKey: string;
  config?: UnifyIntentClientConfig;
}>;

const UnifyIntentProvider = ({
  children,
  writeKey,
  config,
}: UnifyIntentProviderProps) => {
  const [client, setClient] = useState<UnifyIntentClient | null>(null);

  useEffect(() => {
    setClient(new UnifyIntentClient(writeKey, config));
  }, []);

  return (
    <UnifyIntentContext.Provider value={{ client }}>
      {children}
    </UnifyIntentContext.Provider>
  );
};

export default UnifyIntentProvider;
