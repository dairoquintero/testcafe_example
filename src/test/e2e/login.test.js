import { Selector } from 'testcafe';
import { login } from '../../../helper.js';

fixture`Login Test`
	.page('http://zero.webappsecurity.com/')
	.beforeEach(async t => {
		await t.setTestSpeed(1);
	});

test('User cannot login website', async t => {
	const alert_message = Selector('.alert-error');
	await login('invalid username', 'invalid password');
	await t
		.expect(alert_message.innerText)
		.eql('Login and/or password are wrong.');
});

test('User login successfully', async t => {
	const logout_button = Selector('#logout_link');
	const sign_button = Selector('#signin_button');

	await login('username', 'password');
	await t.expect(logout_button.exists).ok();
	await t.expect(sign_button.exists).notOk();
});
