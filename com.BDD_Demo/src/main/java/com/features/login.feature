Feature: JBK offline website
 @login 
Scenario Outline: login Test
  

When  user enters "<uname>" and "<pass>"
And   user click on login button
Then  user will be on Home page

Examples:
|uname|pass|
|kiran@gmail.com|123456|
|nirmala|hweuii|
|pritam|qwrwte|


    
Scenario: verify image of logo
Given user should be on login page  
Then  user should see a logo
    
Scenario:  page headline
#Given user should be on login page
Then  user should see a headline of page
   
  