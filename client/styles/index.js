// This file is an entry point for webpack to handle SASS(CSS) Modules.
//
// Explanation:
// To allow webpack to create SASS(CSS) Modules for us, we have to provide it with JS
// entry point. This entry point refers SASS files, so SASS files can be pushed
// through bunch of webpack loaders. That's, roughly, way of webpack. Give it some
// entry point, push it through loaders, produce new files on the other side.
//
// Usage:
// Everytime you want to create new CSS Module you should import it in this file, so
// webpack can compile it and produce according .CLJC file in wh-client/client/src/styles.
//
// You should NOT import every SASS file here, only files that function as entry
// points for Modules. You may create Modules per application page, or per application
// module, if application module happen to be big and distinct enough.
// If you just want to organize SASS files but do not want to create new SASS Modules,
// just use imports in SASS files.
//
//
// In days of uncertainty find @Andrzej Fricze


import './landing.sass';
