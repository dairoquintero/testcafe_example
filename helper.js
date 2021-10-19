import { t } from 'testcafe'
import {Selector} from 'testcafe'

export async function login(username, password) {
	const sign_button = Selector('#signin_button');
	const login_input = Selector('#user_login');
	const password_input = Selector('#user_password');
	const submit_button = Selector('.btn-primary');
	await t.click(sign_button);
	await t
		.typeText(login_input, username, { paste: true })
		.typeText(password_input, password)
		.click(submit_button);
}
