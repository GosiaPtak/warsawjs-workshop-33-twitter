/* eslint-disable camelcase */
import { EventBus } from '@/helpers/event-bus.js';
export default function newTweet(item) {
    let newTweetie = {
        id: Math.floor(Math.random() * 100),
        created_time: new Date(),
        author: {
            id: Math.floor(Math.random() * 100),
            name: item.name,
            avatar_url: null
        },
        body: item.text
    };
    return newTweetie;
}
