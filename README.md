# Node.js HTTP Server Crash: Missing 'res.end()'

This repository demonstrates a common yet subtle error in Node.js HTTP servers: forgetting to call `res.end()` to close the response.  This can lead to the server crashing or becoming unresponsive.

## Bug

The `bug.js` file contains a simple HTTP server that intentionally omits the `res.end()` call.  This causes the connection to remain open indefinitely, ultimately resulting in a crash or resource exhaustion.

## Solution

The `bugSolution.js` file provides the corrected code.  By adding `res.end()`, the response is properly closed, preventing the crash.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`. Observe the crash or unresponsive behavior.
4. Run `node bugSolution.js`. Observe the server running correctly.

This example highlights the importance of proper resource management in Node.js server-side programming.