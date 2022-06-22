package steps;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class BankAndCashStepDefination extends TestBase{
	LoginPage loginPageObj;
	
	@Before
	public void berforeRun() {
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	    
	}

	@When("^User enters the username as\"([^\"]*)\"$")
	public void User_enters_the_username_as(String username) throws InterruptedException {
		loginPageObj.enterUserName(username);
	}
	

	@When("^User enters the password as\"([^\"]*)\"$")
	public void user_enters_the_password_as(String password) throws InterruptedException {
		loginPageObj.enterPassWord(password);
	    
	}

	@When("^User clicks on signin\"([^\"]*)\"$")
	public void user_clicks_on_signin(String signin) throws InterruptedException {
	    loginPageObj.clickOnSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page()  {
	   Assert.assertEquals("Dashboard- iBilling", loginPageObj.getPageTitle());
//	   takeScreenshot(driver);
	}

	@Then("^User clicks on bankCash")
	public void user_clicks_on_bankCash() throws InterruptedException {
		loginPageObj.clicksOnBankCash();
	}

	@Then("^User clicks on newAccount")
	public void user_clicks_on_newAccount() throws InterruptedException {
	    loginPageObj.clicksOnNewAccount();
	    Assert.assertEquals("Accounts- iBilling", loginPageObj.getPageTitle());
	}

	@Then("^User enters\"([^\"]*)\"in accounts page$")
	public void user_enters_in_accounts_page(String accountTitle) throws InterruptedException {
		loginPageObj.enterAccountTitle(accountTitle);
	}
	
	@Then("^User enters description as\"([^\"]*)\"in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description) throws InterruptedException {
	   loginPageObj.enterDescription(description);
	}

	@Then("^User enters initialBalance as\"([^\"]*)\"in accounts page$")
	public void user_enters_initialBalance_as_in_accounts_page(String initialBalance) throws InterruptedException {
	    loginPageObj.enterInitialBalance(initialBalance);
	}

	@Then("^User enters accountNumber as\"([^\"]*)\"in accounts page$")
	public void user_enters_accountNumber_as_in_accounts_page(String accountNumber) throws InterruptedException {
	    loginPageObj.enterAccountNumber(accountNumber);
	}

	@Then("^User enters contactPerson as\"([^\"]*)\"in accounts page$")
	public void user_enters_contactPerson_as_in_accounts_page(String contactPerson) throws InterruptedException {
	    loginPageObj.enterContactPerson(contactPerson);
	}

	@Then("^User enters contactPhone as\"([^\"]*)\"in accounts page$")
	public void user_enters_contactPhone_as_in_accounts_page(String contactPhone) throws InterruptedException {
	    loginPageObj.enterPhone(contactPhone);
	}

	@Then("^User enters internetBankingURL as\"([^\"]*)\"in accounts page$")
	public void user_enters_internetBankingURL_as_in_accounts_page(String internetBankingURL) throws InterruptedException {
	   loginPageObj.enterInternetBankingURL(internetBankingURL);
	}
	
	@Then("^User clicks on submit") 
	public void user_clicks_on_submit() {
	   loginPageObj.clickSubmit();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully()  {
		Assert.assertEquals("Accounts- iBilling", loginPageObj.getPageTitle());
	    
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
  
}
