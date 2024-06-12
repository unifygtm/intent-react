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
  /**
   * The client instance to make available with this provider.
   */
  client?: UnifyIntentClient;

  /**
   * @deprecated - you should pass the `client` prop instead
   */
  writeKey?: string;

  /**
   * @deprecated - you should pass the `client` prop instead
   */
  config?: UnifyIntentClientConfig;
}>;

const UnifyIntentProvider = ({
  client: clientFromProps,
  writeKey,
  config,
  children,
}: UnifyIntentProviderProps) => {
  const [client, setClient] = useState<UnifyIntentClient | null>(clientFromProps ?? null);

  useEffect(() => {
    if (writeKey) {
      setClient(new UnifyIntentClient(writeKey, config));
    } else {
      client?.mount();
    }

    return () => {
      if (!writeKey) {
        client?.unmount();
      }
    }
  }, []);

  return (
    <UnifyIntentContext.Provider value={{ client }}>
      {children}
    </UnifyIntentContext.Provider>
  );
};

export default UnifyIntentProvider;
