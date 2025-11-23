import { Card as v1Card } from './versions/v1/card';
import { Card as v2Card } from './versions/v2/card';

const DeprecatedCardV1 = new Proxy(v1Card, {
    apply(_, __, args) {
        if (process.env.NODE_ENV === 'development') {
            console.warn('Card.v1 is deprecated, use Card instead');
        }
        // @ts-expect-error - whatever about the args bro
        return v1Card(...args);
    }
});

export const Card = Object.assign(v2Card, {
    v1: DeprecatedCardV1
});