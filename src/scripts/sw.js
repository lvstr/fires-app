import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import CONFIG from './globals/config';
import 'regenerator-runtime';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    new RegExp('.+\\.js$'),
    new StaleWhileRevalidate({
        cacheName: 'js-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7,
                purgeOnQuotaError: true,
            }),
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);

registerRoute(
    new RegExp('.+\\.css$'),
    new StaleWhileRevalidate({
        cacheName: 'css-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7,
                purgeOnQuotaError: true,
            }),
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);
registerRoute(
    new RegExp(`${CONFIG.BASE_IMAGE_URL}`),
    new StaleWhileRevalidate({
        cacheName: 'api-image-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7,
                purgeOnQuotaError: true,
            }),
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);
registerRoute(
    new RegExp(`${CONFIG.BASE_URL}list`),
    new StaleWhileRevalidate({
        cacheName: 'restaurant-list-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7,
                purgeOnQuotaError: true,
            }),
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);

registerRoute(
    new RegExp(`${CONFIG.BASE_URL}detail/`),
    new StaleWhileRevalidate({
        cacheName: 'restaurant-detail-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7,
                purgeOnQuotaError: true,
            }),
            new CacheableResponsePlugin({
                statuses: [0, 200],
            }),
        ],
    })
);
registerRoute(new RegExp('/.*'), new StaleWhileRevalidate({}), 'GET');
