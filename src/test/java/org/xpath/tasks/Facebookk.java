package org.xpath.tasks;

import org.base.Base;
import org.pojo.ForgottenPassPojo;

import cucumber.api.java.en.When;

public class Facebookk extends Base {
	
	ForgottenPassPojo fpp;

	@When("user has to click forgot password link")
	public void user_has_to_click_forgot_password_link() {
	    fpp = new ForgottenPassPojo();
		clickBtn(fpp.getForgotPass());
	}

	@When("user has to enter the mobno on mobno field")
	public void user_has_to_enter_the_mobno_on_mobno_field() {
	    fpp = new ForgottenPassPojo();
	    sendTxt(fpp.getMobileNum(), "9092737724");

	}

	@When("click the search button")
	public void click_the_search_button() throws InterruptedException {
	    fpp = new ForgottenPassPojo();
	    clickBtn(fpp.getSearchBtn());
	    Thread.sleep(5000);
	}

}
