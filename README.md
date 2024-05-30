# Unify Intent React

Library for using the [Unify Intent JS Client](https://github.com/unifygtm/intent-js-client) in a React app.

## Installation

### npm

```Shell
npm install @unifygtm/intent-react
```

### yarn

```Shell
yarn add @unifygtm/intent-react
```

## Usage

Wrap your React app in a `UnifyIntentProvider`:

```TSX
import { UnifyIntentProvider, UnifyIntentClientConfig } from '@unifygtm/intent-react';

const writeKey = 'YOUR_PUBLIC_API_KEY';

const config: UnifyIntentClientConfig = {
  autoPage: true,
  autoIdentify: false,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <UnifyIntentProvider writeKey={writeKey} config={config}>
    <App />
  </UnifyIntentProvider>
);
```

Then, any components rendered in your app can access the intent client
using the `useUnifyIntent` hook:

```TSX
import { useUnifyIntent } from '@unifygtm/intent-react';

const SomeComponent = () => {
  // However you access the current user...
  const currentUser = useCurrentUser();

  const unify = useUnifyIntent();

  useEffect(() => {
    // Log an identify event for the current user
    unify.identify(currentUser.emailAddress);
  }, [currentUser.emailAddress]);
};
```
