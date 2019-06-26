<template>
    <div class="m-2">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block href="#" v-b-toggle.accordion-1 variant="info">Add a Tweetie</b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>
                        <b-form
                            @submit.prevent="newTweet(form)"
                            @reset.prevent="onReset(form)"
                            v-if="show"
                            class="alert alert-info shadow-sm pb-3 mb-3 rounded"
                        >
                            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                <b-form-input
                                    id="input-2"
                                    v-model="form.name"
                                    required
                                    placeholder="Enter name"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group
                                id="input-group-2"
                                label="Your Tweetie:"
                                label-for="textarea-state"
                            >
                                <b-form-textarea
                                    id="textarea-state"
                                    v-model="form.text"
                                    placeholder="Enter max 160 characters"
                                    rows="4"
                                    :state="state"
                                ></b-form-textarea>
                            </b-form-group>
                            <b-button type="reset" variant="danger">Reset</b-button>
                            <b-button type="submit" variant="success">Submit</b-button>
                        </b-form>
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>

<script>
import { newTweet, onReset } from "@/helpers/on-submit";
import { EventBus } from "@/helpers/event-bus.js";
export default {
    name: "AddTweet",
    data() {
        return {
            form: {
                name: "",
                text: ""
            },
            show: true
        };
    },
    methods: {
        newTweet,
        onReset
    },
    computed: {
        state() {
            return this.form.text.length < 160 ? true : false;
        },
    },
    destroyed() {
        console.log("everything is destroyed");
        newTweet.destroyed;
        onReset.destroyed;
    }
};
</script>

<style>
</style>
