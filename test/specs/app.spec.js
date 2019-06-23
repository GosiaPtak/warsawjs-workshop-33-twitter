//@ts-check
import { assert } from 'chai';
import { mount } from '@vue/test-utils';

// @ts-ignore
import App from '@/components/app';
// @ts-ignore
import TweetList from '@/components/tweet-list';
suite('App', () => {
	it('should plus 2 and 2', () => {
		const input = 2 + 2;
		const output = 4;
		assert.equal(input, output);
	});
	it('should plus 3 and 2', () => {
		const input = 3 + 2;
		const output = 5;
		assert.equal(input, output);
	});
	it('should render single TweetList item', () => {
		const wrapper = mount(App, {
			stubs: {
				"b-card": true,
				"b-card-text": true
			}
		});
		assert.ok(wrapper.contains(TweetList));
	});
});
