<template>
    <b-container class="bv-example-row" fluid>
        <TweetList
            :tweets="tweets">
        </TweetList>
    </b-container>
</template>

<script>
import TweetList from "@/components/tweet-list";
import { setTimeout } from "timers";
export default {
    name: "App",
    components: {
        TweetList
    },
    data() {
        return {
            tweets: []
        };
    },
    methods: {
        async fetchTweets () {
        const url = "http://localhost:3000/tweets";
        try {
            const respons = await fetch(url);
            return await respons.json();

        } catch (err){
            console.log(err);
        }
        }
    },
    async mounted() {
        this.tweets = await this.fetchTweets();
        // const abortCtrl = new AbortController();
        // setTimeout(() => {
        //     abortCtrl.abort();
        // }, 15*1000);
        // const url ="http://localhost:3000/tweets";
        // const respons = await fetch (url, {signal: abortCtrl.signal});
        // const tweets = await respons.json();
        // this.tweets = tweets;
    }
};
</script>
<style>
</style>
