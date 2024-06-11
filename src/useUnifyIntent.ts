import { useContext } from 'react';

import { UnifyIntentContext } from './UnifyIntentProvider';

/**
 * This hook returns the current `UnifyIntentClient`. It should only be
 * used from within a `UnifyIntentProvider` component.
 *
 * @returns the current Unify Intent Client
 */
function useUnifyIntent() {
  const { client } = useContext(UnifyIntentContext);

  if (client === undefined) {
    throw new Error(
      'useUnifyIntent can only be used within a UnifyIntentProvider.',
    );
  }

  return client;
}

export default useUnifyIntent;
