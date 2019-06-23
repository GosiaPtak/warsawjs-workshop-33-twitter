<template>
    <div>
        <TweetList :tweets="tweets"></TweetList>
    </div>
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
    async mounted() {
        const url = "http://localhost:3000/tweets";
        try {
            const respons = await fetch(url);
            const tweets = await respons.json();
            this.tweets = tweets;
        } catch (err){
            console.log(err);
        }
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
