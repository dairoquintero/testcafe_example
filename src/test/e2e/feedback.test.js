import { Selector } from 'testcafe';

//prettier-ignore
fixture`Feedback form test`
.page('http://zero.webappsecurity.com/')
.beforeEach(async t => {
	await t.setTestSpeed(1);
});

test('User can submit feedback via form', async t => {
	//Selectors
	const feedback_button = Selector('#feedback');
	const name_input = Selector('#name');
	const email_input = Selector('#email');
	const subject_input = Selector('#subject');
	const question_input = Selector('#comment');
	const submit_button = Selector('.btn-primary');
	const expected_message = Selector('.span6');

	//Actions
	await t.click(feedback_button);
	await t
		.typeText(name_input, 'Dairo')
		.typeText(email_input, 'email@mail.com')
		.typeText(subject_input, 'subject title')
		.typeText(question_input, 'is possible make a question?');

	await t.click(submit_button);

	//Assertions
	const snapshot = await expected_message();
	console.log('text element --> \n' + snapshot.innerText);
	await t.expect(expected_message.innerText).contains('Dairo');
	await t.expect(email_input.exists).notOk();
});
