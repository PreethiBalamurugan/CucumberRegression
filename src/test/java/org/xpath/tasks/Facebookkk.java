package org.xpath.tasks;

import org.base.Base;
import org.pojo.CreateNewAccount;

import cucumber.api.java.en.When;

public class Facebookkk extends Base {

	CreateNewAccount cna;

	@When("click create new account button")
	public void click_create_new_account_button() {
		cna = new CreateNewAccount();
		clickBtn(cna.getAccBtn());
	}
	
	@When("user has enter the first name and last name")
	public void user_has_enter_the_first_name_and_last_name() throws InterruptedException {
		Thread.sleep(10000);
		cna = new CreateNewAccount();
		javaSend(cna.getFirstNa(), "Vishal");
		String attr = getAttr(cna.getFirstNa());
		System.out.println("FirstName Sent : "+attr);
		sendTxt(cna.getSureName(), "Smart");
		String attr1 = getAttr(cna.getSureName());
		System.out.println("LastName Sent : "+attr1);
	}

	@When("user has to enter the mobile num or password")
	public void user_has_to_enter_the_mobile_num_or_password() {
		cna = new CreateNewAccount();
		sendTxt(cna.getEmail(), "vishal@gmail.com");
		String attr1 = getAttr(cna.getEmail());
		System.out.println("Email Sent : "+attr1);
	}

	@When("user has to enter the new password")
	public void user_has_to_enter_the_new_password() {
		cna = new CreateNewAccount();
		sendTxt(cna.getNewPass(), "vishal124");
	}

	@When("user has to select date of birth")
	public void user_has_to_select_date_of_birth() {
		cna = new CreateNewAccount();
		selectIndex(cna.getDate(), 4);
		selectIndex(cna.getMonth(), 3);
		selectIndex(cna.getYear(), 4);
	}

	@When("user has to click gender")
	public void user_has_to_click_gender() {
		cna = new CreateNewAccount();
		clickBtn(cna.getMale());
	}
}
