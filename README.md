# Issue Summary

When using `webpack.optimize.CommonsChunkPlugin` (it may be in other places I'm not sure), webpack assumes that the global scope is `window`.

While this works great for code running in the main thread, any worker threads that attempt to run these binaries fail (`window` is not available in worker threads).

# Expected Behavior

Webpack should properly grab the global scope for the thread (worker thread or otherwise) and attach the loader mechanics there.
