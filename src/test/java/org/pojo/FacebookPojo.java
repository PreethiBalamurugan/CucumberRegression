package org.pojo;

import org.base.Base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FacebookPojo extends Base{
	
	public FacebookPojo() {
		PageFactory.initElements(driver, this);
	}
		
	@FindAll({
		@FindBy(xpath="//input[contains(@type,'te')]"),  // Contains Attribute
		@FindBy(xpath="//input[starts-with(@id,'em')]"),  // Starts - with Attribute
		@FindBy(xpath="//*[@id='email']"),  // Denotes all the tags in the dom in which the corresponding attribute
		@FindBy(xpath="//input[@id='email' and @class='inputtext _55r1 _6luy']"), // And 
		@FindBy(xpath="//input[@id='email' or @name='email']")
	})
	private WebElement email;
	
	@FindBy(id="pass")
	private WebElement password;
	
	@FindBy(id="u_0_b")
	private WebElement loginBtn;

	public WebElement getLoginBtn() {
		return loginBtn;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getEmail() {
		return email;
	}

}
