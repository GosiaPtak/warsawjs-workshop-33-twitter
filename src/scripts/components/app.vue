<template>
    <div>
        <TweetList :tweets="tweets"></TweetList>
    </div>
</template>

<script>
import TweetList from "@/components/tweet-list";
export default {
    name: "App",
    components: {
        TweetList
    },
    data() {
        return {
            tweets: [
                { id: "12978", body: "lorem10" },
                { id: "987654", body: "lorem10lorem" },
                { id: "108362", body: "lorem10loremloremlorem" },
                { id: "1083652", body: "doloremloremdolorem" }
            ]
        };
    }
};
</script>

<style>
</style>
