package org.xpath.tasks;

import java.util.List;
import java.util.Map;

import org.base.Base;
import org.junit.Assert;
import org.junit.Ignore;
import org.pojo.FacebookPojo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Facebook extends Base {
	FacebookPojo fb;

	@Given("user has to launch the chrome browser and hit the url of facebook")
	public void user_has_to_launch_the_chrome_browser_and_hit_the_url_of_facebook() {
		browser();
		launchUrl("https://www.facebook.com/");
		maxWindow();
	}
	
	@When("user has to enter the username and password")
	public void user_has_to_enter_the_username_and_password(io.cucumber.datatable.DataTable dt) {
		fb = new FacebookPojo();
		// One Dimensional List
		//List<String> al = dt.asList();
		//sendTxt(fb.getEmail(), al.get(0));
		//sendTxt(fb.getPassword(), al.get(2));
//		 | Vishal | vishal@123 | 12345678 | 30/07/1997 |

		
		// Two Dimensional List
//		List<List<String>> als = dt.asLists();
//		sendTxt(fb.getEmail(), als.get(1).get(1));
//		sendTxt(fb.getPassword(), als.get(0).get(2));
//		 | Vishal | vishal@123 | 12345678 | 30/07/1997 |
//	      | vel    | vel@123    |   098765 | 30/07/1997 |
		
		// One Dimensional Map
//		Map<String, String> am = dt.asMap(String.class, String.class);
//		sendTxt(fb.getEmail(), am.get("username"));
//		sendTxt(fb.getPassword(), am.get("password"));
//		  | username | vishal@123 |
//	      | password |   12345678 |
		
		// Two Dimensional Map
		List<Map<String, String>> ams = dt.asMaps();
		sendTxt(fb.getEmail(), ams.get(1).get("username"));
		sendTxt(fb.getPassword(), ams.get(0).get("password"));

	}

//	@When("user has to enter the {string} and {string}")
//	public void user_has_to_enter_the_and(String str, String str2) {
//		fb = new FacebookPojo();
//		sendTxt(fb.getEmail(), str);
//		sendTxt(fb.getPassword(), str2);
//	}

	@When("click the login button")
	public void click_the_login_button() {
		fb = new FacebookPojo();
		clickBtn(fb.getLoginBtn());
	}

	@Then("user unable to enter the home page of facebook")
	public void user_unable_to_enter_the_home_page_of_facebook() {
		 driver.close();
	}

}
