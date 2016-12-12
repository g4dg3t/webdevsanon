
importScripts('/sw-toolbox.js');

const filesToCache = [
  './',
  '/fonts/Roboto-Black.ttf',
  '/fonts/Roboto-Regular.ttf',
  '/pic.jpg',
];

// toolbox.options.debug = true;
toolbox.router.default = toolbox.networkOnly;
toolbox.router.get('/(.*)', toolbox.fastest);
toolbox.router.get('/(.*)', toolbox.cacheFirst, {origin: 'https://cdn.ampproject.org'});

toolbox.precache(filesToCache);
