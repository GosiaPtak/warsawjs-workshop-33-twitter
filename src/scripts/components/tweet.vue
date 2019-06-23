<template>
    <div class="tweet">
        <b-card
            :title="tweet.author.name"
            :sub-title="tweet.created_time | myDate"
            :img-src="tweet.author.avatar_url"
            img-alt="Card image"
            img-left
            class="m-3 w-75"
        >
            <b-card-text class="m-2">{{ tweet.body }}</b-card-text>
        </b-card>
    </div>
</template>

<script>
import myDate from '@/helpers/my-date.js';

export default {
    name: "Tweet",
    props: {
        tweet: {
            id: String,
            created_time: String,
            author: {
                id: String,
                name: String,
                avatar_url: String
            },
            body: String
        }
    },
    computed: {
        created_time() {
           return myDate(this.tweet.created_time);
        }
    }
    ,
    filters:{
        myDate
    }
};
</script>
<style>
</style>
