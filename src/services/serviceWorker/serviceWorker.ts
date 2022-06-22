export function startServiceWorker() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        // eslint-disable-next-line no-console
        console.log('ServiceWorker registration successful with  scope: ', registration.scope);
      })
      .catch((error: string) => {
        // eslint-disable-next-line no-console
        console.log('ServiceWorker registration failed: ', error);
      });
  }
}
