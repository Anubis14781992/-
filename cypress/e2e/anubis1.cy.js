describe('Тестирование staya', function () {

    it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); //зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль
       cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
       cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
       cy.get('#loginButton').click(); //нажали войти
       cy.wait(5000); //добавляем время выдержки, чтоб наверняка все прогрузилось

       cy.get('#message').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
       cy.get('#message').should('be.visible'); //текст виден пользователю(Авторизация прошла успешно)

       })
       
       it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        
        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('iLoveqastudio1ывы'); //ввели неверный пароль
        cy.get('#loginButton').click(); //нажали войти
        cy.get('#message').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
        cy.get('#message').should('be.visible'); //текст виден пользователю(Авторизация прошла успешно)
 
        })
        it('Неверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); //зашли на сайт
            
            cy.get('#mail').type('erman@dolnikov.ru'); //ввели неверный логин
            cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
            cy.get('#loginButton').click(); //нажали войти
            cy.get('#message').contains('Такого логина или пароля нет'); //проверяю, что после авторизации вижу текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
            cy.get('#message').should('be.visible'); //текст виден пользователю(Авторизация прошла успешно)
     
            })

        it('Не верная валидация логина', function () {
            cy.visit('https://login.qa.studio/'); //зашли на сайт

            cy.get('#mail').type('germandolnikov.ru'); //ввели невалидный логин(без @)
            cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
            cy.get('#loginButton').click(); //нажали войти
            cy.get('#message').contains('Нужно исправить проблему валидации'); //проверяю, что после авторизации вижу текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
            cy.get('#message').should('be.visible'); //текст виден пользователю(Авторизация прошла успешно)
     
            })

            it('Проверка восстановления пароля', function () {
                cy.visit('https://login.qa.studio/'); //зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль
            
                cy.get('#forgotEmailButton').click(); //нажали кнопку "Забыли пароль"
                cy.get('#mailForgot').type('german@dolnikov.ru'); //ввели верный email для восстановления
                cy.get('#restoreEmailButton').click(); //нажали кнопку "Отправить код"
                cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
                cy.get('#message').should('be.visible'); //текст виден пользователю(Успешно отправили пароль на e-mail)
         
                })

                it('Верный логин и верный пароль', function () {
                    cy.visit('https://login.qa.studio/'); //зашли на сайт
                    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяю цвет кнопки восстановить пароль
                    cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин, но с заглавными буквами
                    cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
                    cy.get('#loginButton').click(); //нажали войти
                                 
                    cy.get('#message').contains('Авторизация прошла успешно'); //проверяю, что после авторизации вижу текст
                    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик и он виден для пользователя
                    cy.get('#message').should('be.visible'); //текст виден пользователю(Авторизация прошла успешно)
             
                    })
             
                    })
                
                



//План
//Найти поле логин и ввести правильный логин
//Найти поле пароль и ввести правильный пароль
//Найти кнопку Войти и нажать ее
//Проверить, что авторизация прошла успешно
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 

