
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('restaurant-cache').then(function(cache){
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                'js/main.js',
                'js/restaurant_info.js',
                'css/responsive_details.css',
                'css/responsive.css',
                'css/styles.css',
                'img/',
                'data/'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(res){
            if(res) return res;
            return fetch(event.request);
        })
    );
});