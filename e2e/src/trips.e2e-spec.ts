import { browser, element, by, protractor } from "protractor";
import { AppPage } from './app.po';

describe('Trip tests', () => {

        let page: AppPage;

        beforeEach(() => {
            page = new AppPage();
        });

        it('should test that e2e works (simplest test)', () => {
            //Arrange (may be empty)
            //Act
            //Assert
            browser.get('');
            element(by.id('home')).click();
            element(by.id('home-login')).click();
            browser.sleep(3000);
            expect(element(by.css('h1')).getText()).toEqual('Home');

            element.all(by.css('h1')).then(function(arr){
               //expect(element(arr[1])).getText()).toEqual('Login')
               const item = arr[1];
               expect(item).toEqual('Login');
            });
            
            
            
            expect(true).toBeTruthy();

        });

        it('I always pass', () => {

        });

        // it('should test the add a new trip', () => {
        //     browser.get('');
        //     element(by.id('home')).click();
        //     element(by.id('home-login')).click();
        //     browser.sleep(2000);
        //     element(by.id('username-input')).sendKeys('username');
        //     element(by.id('password-input')).sendKeys('password');
        //     element(by.id('login-button')).click();

        //     element(by.id('findalift-button')).click();
            
        //     element.all(by.css('.example-card')).then(function(el) {
        //         const before = el.length; //eg before = 3
        //         element(by.id('registeratrip-button')).click();
        //         element(by.css('input[formControlName=origin]')).sendKeys('ekin');
        //         element(by.css('input[formControlName=destination]')).sendKeys('Copenhagen');
        //         element(by.css('input[formControlName=availableSeats]')).sendKeys('4');
        //         element(by.css('input[formControlName=departureTime]')).sendKeys('22-10-2019' + protractor.Key.TAB + '10:05');
        //         element(by.id('registeratrip')).click();

        //         element.all(by.css('.example-card')).then(function(el2) {
        //             const after = el2.length;

        //             expect(before + 1).toEqual(after);
        //         });    
        //     });
        // });
        // // expects to  be after this test
        // it('should test the delete a trip', () => {
        //     element.all(by.css('.example-card')).then(function(el3) {
        //         const firstTime = el3.length;
        //         element.all(by.css('.deleteButton')).get(1).click();
        //         browser.sleep(3000);
        //         element.all(by.css('.example-card')).then(function(el4) {
        //            const secondTime = el4.length;
                   
        //            expect(firstTime - 1).toEqual(secondTime);
        //         });
        //     });
        // });    
});  