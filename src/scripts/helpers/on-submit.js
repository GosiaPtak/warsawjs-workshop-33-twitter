/* eslint-disable camelcase */
import { EventBus } from '@/helpers/event-bus.js';

export function newTweet(item) {
    const magicNumber = 100;
    let newTweetie = {
        id: Math.floor(Math.random() * magicNumber),
        created_time: new Date(),
        author: {
            id: Math.floor(Math.random() * magicNumber),
            name: item.name,
            avatar_url: 'https://picsum.photos/128/128'
        },
        body: item.text
    };
    EventBus.$emit('onSubmit', newTweetie);
}

export function onReset(item) {
    item.name = ' ';
    item.text = ' ';
    EventBus.$emit('onReset');
}


