@BankandCashFeature
Feature: Techfios bank and cash New Account Functionality

Background:
  	Given User is on the techfios login page 

  
 Scenario Outline: 1 User should be able to login with valid credentials and open a new account	
	  When User enters the username as"<username>" 
	  When User enters the password as"<password>"
	  And  User clicks on signin"<signin>"
	  Then User should land on Dashboard page 
	  And User clicks on bankCash
	  And User clicks on newAccount
	  And User enters"<accountTitle>"in accounts page 
	  And User enters description as"<description>"in accounts page 
	  And User enters initialBalance as"<initialBalance>"in accounts page 
	  And User enters accountNumber as"<accountNumber>"in accounts page 
	  And User enters contactPerson as"<contactPerson>"in accounts page 
	  And User enters contactPhone as"<contactPhone>"in accounts page 
	  And User enters internetBankingURL as"<internetBankingURL>"in accounts page 
	  And User clicks on submit
	  Then User should be able to validate account created successfully
	
	Examples:
	|username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|contactPhone|internetBankingURL|
	|demo@techfios.com|abc123|Ekta_Cucumber_Test|Savings Account|20000|887654332|Nipun|2354685432|https://techfios.com/billing/?ng=accounts/list/|
  	 

