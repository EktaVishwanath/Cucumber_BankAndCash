$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BankAndCash.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankandCashFeature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "1 User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User enters the username as\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters the password as\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin\"\u003csignin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"\u003caccountTitle\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters description as\"\u003cdescription\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters initialBalance as\"\u003cinitialBalance\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters accountNumber as\"\u003caccountNumber\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters contactPerson as\"\u003ccontactPerson\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters contactPhone as\"\u003ccontactPhone\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters internetBankingURL as\"\u003cinternetBankingURL\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "contactPhone",
        "internetBankingURL"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Ekta_Cucumber_Test",
        "Savings Account",
        "20000",
        "887654332",
        "Nipun",
        "2354685432",
        "https://techfios.com/billing/?ng\u003daccounts/list/"
      ],
      "line": 27,
      "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3114806800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "BankAndCashStepDefination.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 805545200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "1 User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;1-user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@BankandCashFeature"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters the username as\"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters the password as\"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin\"\u003csignin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"Ekta_Cucumber_Test\"in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters description as\"Savings Account\"in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters initialBalance as\"20000\"in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters accountNumber as\"887654332\"in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters contactPerson as\"Nipun\"in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters contactPhone as\"2354685432\"in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User enters internetBankingURL as\"https://techfios.com/billing/?ng\u003daccounts/list/\"in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 28
    }
  ],
  "location": "BankAndCashStepDefination.User_enters_the_username_as(String)"
});
formatter.result({
  "duration": 2266583000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 28
    }
  ],
  "location": "BankAndCashStepDefination.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 1202750700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003csignin\u003e",
      "offset": 22
    }
  ],
  "location": "BankAndCashStepDefination.user_clicks_on_signin(String)"
});
formatter.result({
  "duration": 3088874600,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 128260800,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashStepDefination.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 1340826100,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashStepDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 1559656500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ekta_Cucumber_Test",
      "offset": 12
    }
  ],
  "location": "BankAndCashStepDefination.user_enters_in_accounts_page(String)"
});
formatter.result({
  "duration": 1153887200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Savings Account",
      "offset": 27
    }
  ],
  "location": "BankAndCashStepDefination.user_enters_description_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1201247700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 30
    }
  ],
  "location": "BankAndCashStepDefination.user_enters_initialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1187114800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "887654332",
      "offset": 29
    }
  ],
  "location": "BankAndCashStepDefination.user_enters_accountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1237087900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nipun",
      "offset": 29
    }
  ],
  "location": "BankAndCashStepDefination.user_enters_contactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1262755100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2354685432",
      "offset": 28
    }
  ],
  "location": "BankAndCashStepDefination.user_enters_contactPhone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1198008700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://techfios.com/billing/?ng\u003daccounts/list/",
      "offset": 34
    }
  ],
  "location": "BankAndCashStepDefination.user_enters_internetBankingURL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 1353411800,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashStepDefination.user_clicks_on_submit()"
});
formatter.result({
  "duration": 1112369500,
  "status": "passed"
});
formatter.match({
  "location": "BankAndCashStepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 5882300,
  "status": "passed"
});
});