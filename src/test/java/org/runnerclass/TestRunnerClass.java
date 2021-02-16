package org.runnerclass;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = "org.xpath.tasks", dryRun = false, monochrome = true, plugin = {
		"html:target", "json:target//newreport.json" })
public class TestRunnerClass {

}
