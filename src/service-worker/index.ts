/** NOTE: To avoid the conflict with the global scope of the window object, we need to cast the self object to the ServiceWorkerGlobalScope type. */
const swSelf = self as unknown as ServiceWorkerGlobalScope;

swSelf.addEventListener('install', (event) => {
  console.log('Service worker installing ...');
  // Some stuff to do
});

swSelf.addEventListener('activate', (event) => {
  console.log('Service worker activating ...');
  // Some stuff to do
});
