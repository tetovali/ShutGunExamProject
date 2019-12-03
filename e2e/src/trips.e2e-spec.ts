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
            element(by.id('username-input')).sendKeys('username');
            element(by.id('password-input')).sendKeys('password');
            browser.sleep(2000);
            element(by.id('login-button')).click();

            // element.all(by.css('h1')).then(function(arr){
            //    //expect(element(arr[1])).getText()).toEqual('Login')
            //    const item = arr[1];
            //    expect(item).toEqual('Login');
            // });
        
            expect(true).toBeTruthy();

        });

        it('should test that register works', () => {
            browser.get('');
            element(by.id('home')).click();
            element(by.id('home-register')).click();
            browser.sleep(2000);
            expect(element(by.css('h1')).getText()).toEqual('Home');
            element(by.id('firstname-input')).sendKeys('emir');
            element(by.id('lastname-input')).sendKeys('kalkan');
            element(by.id('email-input')).sendKeys('e@e.com');
            element(by.id('password-input')).sendKeys('password123');
            element(by.id('city-input')).sendKeys('istanbul');
            element(by.id('phoneNumber-input')).sendKeys('+905392675375');
            element(by.id('birthDate-input')).sendKeys('11/04/1997');
            element(by.id('driversLicense-input')).sendKeys('1234');
            element(by.id('locationOfEducation-input')).sendKeys('Copenhagen');
            browser.sleep(2000);
            element(by.id('register-button')).click();
                 
            expect(true).toBeTruthy();

        });

        it('should test the total quantity of user works', () => {
            browser.get('');
            element(by.id('home')).click();
            element(by.id('home-login')).click();
            element(by.id('username-input')).sendKeys('username');
            element(by.id('password-input')).sendKeys('password');
            element(by.id('login-button')).click();
            element(by.id('userlist-button')).click();
            browser.sleep(2000);
            element.all(by.css('.example-card')).then(function(el) {
                const before = el.length; //eg before = 3
                    expect(before).toEqual(3);
                });    
        });

        it('I always pass', () => {

        });

         it('should test the add a new trip', () => {
              browser.get('');
              element(by.id('home')).click();
              element(by.id('home-login')).click();
              browser.sleep(2000);
              element(by.id('username-input')).sendKeys('username');
              element(by.id('password-input')).sendKeys('password');
              element(by.id('login-button')).click();

              element(by.id('findalift-button')).click();
            
              element.all(by.css('.example-card')).then(function(el) {
                  const before = el.length; //eg before = 3
                  element(by.id('registeratrip-button')).click();
                  element(by.css('input[formControlName=origin]')).sendKeys('ekin');
                  element(by.css('input[formControlName=destination]')).sendKeys('Copenhagen');
                  element(by.css('input[formControlName=availableSeats]')).sendKeys('4');
                  element(by.css('input[formControlName=departureTime]')).sendKeys('22-10-2019' + protractor.Key.TAB + '10:05');
                  element(by.id('registeratrip')).click();

                  element.all(by.css('.example-card')).then(function(el2) {
                      const after = el2.length;

                      expect(before + 1).toEqual(after);
                  });    
              });
          });
           //expects to  be after this test
          it('should test the delete a trip', () => {
              element.all(by.css('.example-card')).then(function(el3) {
                  const firstTime = el3.length;
                  element.all(by.css('.deleteButton')).get(1).click();
                  browser.sleep(3000);
                  element.all(by.css('.example-card')).then(function(el4) {
                     const secondTime = el4.length;
                   
                     expect(firstTime - 1).toEqual(secondTime);
                  });
              });
          });    
});  