import UnifyIntentClient, { UnifyIntentClientConfig } from '@unifygtm/intent-client';
import React, { PropsWithChildren } from 'react';
interface UnifyIntentContextShape {
    client: UnifyIntentClient | null;
}
export declare const UnifyIntentContext: React.Context<UnifyIntentContextShape>;
export type UnifyIntentProviderProps = PropsWithChildren<{
    writeKey: string;
    config?: UnifyIntentClientConfig;
}>;
declare const UnifyIntentProvider: ({ children, writeKey, config, }: UnifyIntentProviderProps) => React.JSX.Element;
export default UnifyIntentProvider;
//# sourceMappingURL=UnifyIntentProvider.d.ts.map