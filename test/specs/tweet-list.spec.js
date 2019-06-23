//@ts-check
import { assert } from 'chai';
import { mount } from '@vue/test-utils';

// @ts-ignore
import Tweet from '@/components/tweet';
// @ts-ignore
import TweetList from '@/components/tweet-list';

suite('TweetList', () => {
	it('should render Tweet item', () => {
		const wrapper = mount(TweetList, {
			stubs: {
				'b-card': true,
				//"b-card": <p>lorem impus</p>
				'b-card-text': true
			}
		});
		assert.ok(wrapper.contains(Tweet));
	});
});
