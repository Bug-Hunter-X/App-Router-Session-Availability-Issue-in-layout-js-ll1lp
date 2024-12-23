```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello world</div>
  );
}
```
This code will cause an error in Next.js 15 if you are using the App Router and have a `layout.js` file in the `pages` directory that attempts to access the `session` object before it is available.  This is because App Router components render in a different order compared to Pages Router.