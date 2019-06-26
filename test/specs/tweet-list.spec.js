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
			propsData: {
				tweets: [
						{ id: "12978", body: "lorem10" },
						{ id: "987654", body: "lorem10lorem" },
						{ id: "108362", body: "lorem10loremloremlorem" },
						{ id: "1083652", body: "doloremloremdolorem" }
					]
			},
			stubs: {
				Tweet: true,
				'b-card': true,
				'title': true,
				'b-card-text': true,
				'b-row': true
			}
		});
		assert.ok(wrapper.contains(Tweet));
	});
});
