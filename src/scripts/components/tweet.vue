<template>
    <div class="tweet">
        <b-card
            :title="tweet.id"
            :sub-title="tweet.name"
            :img-src="tweet.image_url"
            img-alt="Card image"
            img-left
            class="m-3"
        >
            <b-card-text>{{ tweet.description }}</b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    name: "Tweet",
    props: {
        tweet: {
            id: String,
            name: String,
            description: String,
            image_url: String
        } //image_url
    }
};
</script>

<style>
</style>
