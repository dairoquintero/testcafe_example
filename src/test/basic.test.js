import { Selector } from 'testcafe';

//prettier-ignore
fixture 
.disablePageCaching `Getting started with testcafe`
    .page`https://devexpress.github.io/testcafe/example`
    .before(async t =>{
        console.log(value)

        //test setup goes here
       // await t.rundatabaseReset()
        //await seedTestDaat()
    })
    .beforeEach(async t =>{
        //run  before each test
        await t.setTestSpeed(1);
        //await t.setPageLoadTimeout(0)
        
    }).disablePageCaching
    .after(async t => {
        //Cleaning test data
        //Logging and sending data to monitoring
    })
    .afterEach(async t => {
        //run after each test
    })
test('My second testcafe test', async t => {
	//testcafe code
    
	const name_input = Selector('#developer-name');
	const submit_button = Selector('#submit-button');
	const expect_text = Selector('#article-header').innerText;

    //await t.takeScreenshot({fullPage:true})
   // await t.takeElementScreenshot(submit_button)
	await t.typeText(name_input, 'Dairo Quintero');
	await t.click(submit_button);
	//div > li > a.list-item

	await t
		.expect(expect_text)
		.contains('Dairo Quintero', 'text  dont contains "Dairo"');
	//.wait(4000);

    // await t.click('Selector',{options});
    // await t.doubleClick('Selector', {options});
    // await t.rightClick('Selector',{options});
    // //drag element
    // await t.drag('Selector',200,{options});
    // //Hover
    // await t.hover('Selector',{options});
    // //select text
    // await t.selectText('selector');
    // //type text
    // await t.typeText('selector','text');
    // //press key on keyboard
    // await t.pressKey('enter');
    // //Navigate
    // await t.navigateTo('url');
    // //take Screenshot
    // await t.takeScreenshot();
    // await t.takeElementScreenshot();
    // await t.resizeWindow(800,600);

    //assertions
    //Deep Equal
    await t.expect('foo').eql('foo','message error');
    //not deep equal
    await t.expect('foo').notEql('foos');
    //ok
    await t.expect('foo').ok();
    await t .expect(true).ok();
    //Not OK
    await t.expect(false).notOk();
    //contains
    await t.expect('Carro').contains('Car');
    //not contains
    await t.expect('foo').notContains('hey');
    //greater or less than
    await t.expect(10).gt(9);
    await t.expect(10).gte(10);
    await t.expect(10).lt(12);
    await t.expect(10).lte(11);
    //within
    await t.expect(50).within(1,100);
    //Not within
    await t.expect(150).notWithin(1,100);






});
