package pages;

import java.util.Random;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	WebDriver driver;

	// need constructor to get LoginTest WebDriver to this class driver
	public LoginPage(WebDriver driver) {

		// to establish relationship between loginTest driver & loginPage driver
		this.driver = driver;

	}

	// Element list
	@FindBy(how = How.XPATH, using = "//input[@id=\"username\"]")WebElement UserName;
	@FindBy(how = How.XPATH, using = "//input[@id=\"password\"]")WebElement PassWord;
	@FindBy(how = How.XPATH, using = "//button[@ name='login']")WebElement SignInButton;
	@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")WebElement BankCashButton;
	@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")WebElement NewAccount;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")WebElement Description;
	@FindBy(how = How.XPATH, using ="//input[@id='balance']")WebElement InitialBalance;
	@FindBy(how = How.XPATH, using ="//input[@id='account_number']")WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")WebElement ContactPhone;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")WebElement InternetBankingURL;
	@FindBy(how = How.XPATH, using = "//button[contains(text(),' Submit')]")WebElement Submit;
	// Method to interact with the elements
	public void enterUserName(String username) throws InterruptedException {
		UserName.sendKeys(username);
			Thread.sleep(2000);
	}

	public void enterPassWord(String password) throws InterruptedException {
		PassWord.sendKeys(password);
			Thread.sleep(1000);
	}

	public void clickOnSignInButton() throws InterruptedException {
		SignInButton.click();
			Thread.sleep(1000);
	}
	
	public String getPageTitle() {
		 return driver.getTitle();

	}
	
	public void clicksOnBankCash() throws InterruptedException {
		BankCashButton.click();
		Thread.sleep(1000);
	}

	public void clicksOnNewAccount() throws InterruptedException {
		NewAccount.click();
		Thread.sleep(1000);
	}
	
	public void enterAccountTitle(String accountTitle) throws InterruptedException {
		AccountTitle.sendKeys(generateRandomNo(9999) + accountTitle);
		Thread.sleep(1000);
	}
	
	public int generateRandomNo(int boundaryNo) {

		Random rnd = new Random();
		int generatedNo = rnd.nextInt(boundaryNo);
		return generatedNo;

	}

	public void enterDescription(String description) throws InterruptedException {
		Description.sendKeys(description);
		Thread.sleep(1000);
	}
	
	public void enterInitialBalance(String initialBalance) throws InterruptedException {
		InitialBalance.sendKeys(initialBalance);
		Thread.sleep(1000);
	}
	
	public void enterAccountNumber(String accountNumber) throws InterruptedException {
		AccountNumber.sendKeys(generateRandomNo(9999) + accountNumber);
		Thread.sleep(1000);
	}
	
	public void enterContactPerson(String contactPerson) throws InterruptedException {
		ContactPerson.sendKeys(contactPerson);
		Thread.sleep(1000);
	}
	
	public void enterPhone(String contactPhone) throws InterruptedException {
		ContactPhone.sendKeys(contactPhone);
		Thread.sleep(1000);
	}
	
	public void enterInternetBankingURL(String internetBankingURL) throws InterruptedException {
		InternetBankingURL.sendKeys(internetBankingURL);
		Thread.sleep(1000);
	}
	
	public void clickSubmit() {
		Submit.click();
	}
	
	

	

}
