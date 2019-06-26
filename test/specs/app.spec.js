// @ts-nocheck

import { assert } from 'chai';
import { mount } from '@vue/test-utils';
import { nock } from 'nock';

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
				'b-card': true,
				'b-card-text': true
			}
		});
		assert.ok(wrapper.contains(TweetList));
	});
	it('should fetch tweets via HTTP request', async () => {
		const wrapper = mount(App, {
			stubs: {
				TweetList: true,
				"b-card": true,
				"b-card-text": true
			}
		});
		nock('http://localhost:8080/')
		.get('/tweets')
		.reply(200, [{ id: '12345677', description: 'qwdhdtyhytd' }]);

		assert.isFunction(wrapper.vm.fetchTweets);
		const ft = wrapper.vm.fetchTweets;
		const response = await ft();

		assert.lengthOf(response, response.length, 'the same');
	});
});
