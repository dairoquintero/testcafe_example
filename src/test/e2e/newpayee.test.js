import { Selector } from 'testcafe';
import { login } from '../helper/helper.js';

fixture`Add new payee`.page('http://zero.webappsecurity.com/');
test.before(async t => {
	await t.setTestSpeed(1);
	await login('username', 'password');
})('Add new payee in bank section', async t => {
	//Selectors
	const paybillSection = Selector('#pay_bills_tab');
	const addNewPayee = Selector('.ui-corner-top').nth(1);
	const payeeNameInput = Selector('#np_new_payee_name');
	const payeeAdressInput = Selector('#np_new_payee_address');
	const accountInput = Selector('#np_new_payee_account');
	const payDetailsInput = Selector('#np_new_payee_details');
	const addButton = Selector('.btn-primary').nth(1);
	const messageExpected = Selector('#alert_content').innerText;

	//action

	await t.click(paybillSection).click(addNewPayee);

	await t
		.typeText(payeeNameInput, 'First payee')
		.typeText(payeeAdressInput, 'street false # 123')
		.typeText(accountInput, '56336-4456-364')
		.typeText(payDetailsInput, 'Internet payee')
		.click(addButton);

	await t.expect(messageExpected).contains('successfully created');
});
