package com.stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepdef {
	WebDriver driver;
	@Before("@login")
	public void setup() throws Throwable {
		System.setProperty("Webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("file:///E:/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html");
	}

	@After("@login")
	public void teardown() {
		driver.close();
	}
	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
		  if (!driver.getTitle().contains("Log in"))
		     driver.findElement(By.linkText("LOGOUT")).click();
		 
		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("password")).clear();
		driver.findElement(By.id("email")).sendKeys(uname);
		driver.findElement(By.id("password")).sendKeys(pass);
	}

	@When("^user click on login button$")
	public void user_click_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//button")).click();
	}
	@Given("^user should be on login page$")
	public void user_should_be_on_login_page() throws Throwable {
		System.setProperty("Webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("file:///E:/Selenium%20Softwares/Offline%20Website/Offline%20Website/index.html");
	}
	@Then("^user will be on Home page$")
	public void user_will_be_on_Home_page() throws Throwable {
	  Assert.assertEquals("JavaByKiran | Log in", driver.getTitle());
	}
	
	@Then("^user should see a logo$")
	public void user_should_see_a_logo() throws Throwable {
		WebElement logo = driver.findElement(By.tagName("img"));
		Assert.assertTrue(logo.isDisplayed());
	}
	

	@Then("^user should see a headline of page$")
	public void user_should_see_a_headline_of_page() throws Throwable {
		WebElement headline = driver.findElement(By.xpath("//h4"));
		Assert.assertTrue(headline.isDisplayed());
	}

}
