self.addEventListener('install', evt => {
    console.log('Installing Service Worker ....');
});

self.addEventListener('activate', evt => { 
    console.log('Activating Service Worker ...', evt); 
}); 

self.addEventListener('fetch', evt => {
    console.log('Fetch Event',evt);
});

self.addEventListener('sync', event => {     if (event.tag === 'my-tag-name') {         
    event.waitUntil(doTheWork()); 
} 
}); 

