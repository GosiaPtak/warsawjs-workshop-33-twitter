<template>
    <b-row>
        <b-col cols="8">
            <Tweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet"></Tweet>
        </b-col>
        <b-col cols="4">
            <AddTweet></AddTweet>
        </b-col>
    </b-row>
</template>
<script>
import Tweet from "@/components/tweet";
import { EventBus } from "@/helpers/event-bus.js";
import AddTweet from "@/components/add-tweet";
export default {
    name: "TweetList",
    components: {
        Tweet,
        AddTweet
    },
    props: {
        tweets: Array
    },
    methods: {
        listenToTweetie() {
            EventBus.$on("onSubmit", newTweetie => {
                console.log(newTweetie);
            });
        }
    },
    mounted() {
        this.listenToTweetie();
    }
};
</script>

<style>
</style>
