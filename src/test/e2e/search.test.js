import { Selector } from 'testcafe';
import Navbar from '../page-objects/components/Navbar';

const navbar = new Navbar();
// prettier-ignore
fixture `Search box test`
.page('http://zero.webappsecurity.com/')
.beforeEach(async t => {
	await t.setTestSpeed(1);
});

test('User can search for information using search box', async t => {
	//selectors
	//const searchBox= Selector('#searchTerm');
	const resultsTitle = Selector('h2');
	const linkText = Selector('div').innerText;

	//actions
	navbar.search('online bank');
	//Assertions

	//const snapshot = await linkText();
	//console.log('Actual text --> \n'+snapshot.innerText)
	await t.expect(resultsTitle.exists).ok();
	await t.expect(navbar.searchBox.exists).ok();
	await t.expect(linkText).contains('Zero - Free Access to Online Banking');
});
