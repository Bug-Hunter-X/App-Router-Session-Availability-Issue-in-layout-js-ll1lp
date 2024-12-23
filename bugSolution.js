```javascript
// pages/layout.js
import { SessionProvider } from 'next-auth/react'

export default function Layout({ children }) {
  return (
    <SessionProvider>
      <div>
        {/* Check if session exists before rendering components that use it  */}
        {children}
      </div>
    </SessionProvider>
  );
}
```