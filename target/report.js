$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Login/loggin.feature");
formatter.feature({
  "name": "To validate the login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user has to launch the chrome browser and hit the url of facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "Facebook.user_has_to_launch_the_chrome_browser_and_hit_the_url_of_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify the login functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user has to enter the username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "vishal@gmail.com",
        "vishalgmail"
      ]
    },
    {
      "cells": [
        "sinkaravel@gmail.com",
        "sinkaravelmail"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Facebook.user_has_to_enter_the_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Facebook.click_the_login_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#u_0_b\"}\n  (Session info: chrome\u003d88.0.4324.150)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-073N4BVT\u0027, ip: \u0027192.168.0.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.150, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\SOWMIY~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64767}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c1138cfa1f555477c76ea9239b9df9aa\n*** Element info: {Using\u003did, value\u003du_0_b}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat org.base.Base.clickBtn(Base.java:50)\r\n\tat org.xpath.tasks.Facebook.click_the_login_button(Facebook.java:66)\r\n\tat ✽.click the login button(src/test/resources/Login/loggin.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user unable to enter the home page of facebook",
  "keyword": "Then "
});
formatter.match({
  "location": "Facebook.user_unable_to_enter_the_home_page_of_facebook()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user has to launch the chrome browser and hit the url of facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "Facebook.user_has_to_launch_the_chrome_browser_and_hit_the_url_of_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate forgot password link",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user has to click forgot password link",
  "keyword": "When "
});
formatter.match({
  "location": "Facebookk.user_has_to_click_forgot_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the mobno on mobno field",
  "keyword": "And "
});
formatter.match({
  "location": "Facebookk.user_has_to_enter_the_mobno_on_mobno_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Facebookk.click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user has to launch the chrome browser and hit the url of facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "Facebook.user_has_to_launch_the_chrome_browser_and_hit_the_url_of_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the create new account",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "click create new account button",
  "keyword": "When "
});
formatter.match({
  "location": "Facebookkk.click_create_new_account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has enter the first name and last name",
  "keyword": "And "
});
formatter.match({
  "location": "Facebookkk.user_has_enter_the_first_name_and_last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the mobile num or password",
  "keyword": "And "
});
formatter.match({
  "location": "Facebookkk.user_has_to_enter_the_mobile_num_or_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to enter the new password",
  "keyword": "And "
});
formatter.match({
  "location": "Facebookkk.user_has_to_enter_the_new_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to select date of birth",
  "keyword": "And "
});
formatter.match({
  "location": "Facebookkk.user_has_to_select_date_of_birth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to click gender",
  "keyword": "And "
});
formatter.match({
  "location": "Facebookkk.user_has_to_click_gender()"
});
formatter.result({
  "status": "passed"
});
});