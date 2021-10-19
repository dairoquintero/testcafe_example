import { Selector } from 'testcafe';
import Navbar from '../page-objects/components/Navbar';

const navbar = new Navbar();

//pretier-ignore
fixture`Send forgotten password test`
	.page('http://zero.webappsecurity.com/')
	.beforeEach(async t => {
		await t.setTestSpeed(1);
	});

test('User can request new password to be send to his email', async t => {
	//Get selectors
	const sign_button = Selector('#signin_button');
	const forgotte_pass_link = Selector('a').withText('Forgot your password ?');
	const email_input = Selector('#user_email');
	const expected_message = Selector('.span6');

	//Actions
	await t.click(navbar.sign_button);
	await t.click(forgotte_pass_link);
	await t.typeText(email_input, 'email@mail.com', { paste: true });
	await t.pressKey('enter');

	//Asssertions
	const snapshot = await expected_message();
	console.log('text element --> \n' + snapshot.innerText);
	await t.expect(expected_message.innerText).contains('email@mail.com');
	await t.expect(email_input.exists).notOk();
});
