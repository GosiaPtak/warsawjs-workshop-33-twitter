//@ts-check
import { assert } from 'chai';
import { mount } from '@vue/test-utils';

import Tweet from '@/components/tweet';
import TweetList from '@/components/tweet-list';

suite('TweetList', () => {
	it('should render Tweet item', () => {
		const wrapper = mount(TweetList);
		assert.ok(wrapper.contains(Tweet));
	});
});