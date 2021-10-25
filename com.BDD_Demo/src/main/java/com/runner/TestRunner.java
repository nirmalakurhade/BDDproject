package com.runner;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
@RunWith(Cucumber.class)
@CucumberOptions
(
	features="src/main/java/com/features",
	glue="com.stepdefs",
	plugin= "html:test-output",
	dryRun=false
	
	
	
)


public class TestRunner {

	
}
