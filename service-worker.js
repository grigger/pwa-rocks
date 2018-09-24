window.addEventListener('load', () => {
    registerWorker();
});


async function registerWorker() {
    if ('serviceWorker' in navigator) {
        // unregister previous one
        // const oldRegistration = await navigator.serviceWorker.getRegistration();
        // oldRegistration.unregister();

        navigator.serviceWorker.register('./sw.js');
        console.log('service worker has been registered');
    } else {
        console.log('no service worker');
    }
}