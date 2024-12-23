# Next.js 15 App Router Session Availability Issue

This repository demonstrates a potential issue when using the App Router in Next.js 15, specifically when accessing session information within a `layout.js` file before the session is fully available.

## Issue Description

When using the App Router, the order of component rendering differs from the Pages Router. If `layout.js` tries to access the session object before it's populated by middleware, it can result in an error.  This example showcases this problem and its solution.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the error in the console if you try to access the session in layout.js before it is available. Run the solution to fix it.

## Solution

The solution involves conditionally rendering components in your layout, or using middleware to ensure the session is available before your layout attempts to use it.  This repository provides an example of a solution using conditional rendering.