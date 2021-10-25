$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dash.feature");
formatter.feature({
  "line": 2,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9799329496,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify courses",
  "description": "",
  "id": ";verify-courses",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@dash"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user should be on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user will make a list of courses",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user verify course list",
  "keyword": "Then "
});
formatter.match({
  "location": "DashStepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 968754811,
  "status": "passed"
});
formatter.match({
  "location": "DashStepdef.user_will_make_a_list_of_courses()"
});
formatter.result({
  "duration": 108729066,
  "status": "passed"
});
formatter.match({
  "location": "DashStepdef.user_verify_course_list()"
});
formatter.result({
  "duration": 1627507,
  "status": "passed"
});
formatter.after({
  "duration": 193887333,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline website",
  "description": "",
  "id": "jbk-offline-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on Home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "jbk-offline-website;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 11,
      "id": "jbk-offline-website;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 12,
      "id": "jbk-offline-website;login-test;;2"
    },
    {
      "cells": [
        "nirmala",
        "hweuii"
      ],
      "line": 13,
      "id": "jbk-offline-website;login-test;;3"
    },
    {
      "cells": [
        "pritam",
        "qwrwte"
      ],
      "line": 14,
      "id": "jbk-offline-website;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7354728334,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on Home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 269994140,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_click_on_login_button()"
});
formatter.result({
  "duration": 719907238,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_will_be_on_Home_page()"
});
formatter.result({
  "duration": 6195143,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Log in]\u003e but was:\u003cJavaByKiran | [Dashboard]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.LoginStepdef.user_will_be_on_Home_page(LoginStepdef.java:51)\r\n\tat ✽.Then user will be on Home page(login.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 89602690,
  "status": "passed"
});
formatter.before({
  "duration": 6634304862,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"nirmala\" and \"hweuii\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on Home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "nirmala",
      "offset": 13
    },
    {
      "val": "hweuii",
      "offset": 27
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 266484682,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_click_on_login_button()"
});
formatter.result({
  "duration": 65972455,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_will_be_on_Home_page()"
});
formatter.result({
  "duration": 8216672,
  "status": "passed"
});
formatter.after({
  "duration": 66125389,
  "status": "passed"
});
formatter.before({
  "duration": 7411273673,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user enters \"pritam\" and \"qwrwte\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on Home page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pritam",
      "offset": 13
    },
    {
      "val": "qwrwte",
      "offset": 26
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 274802530,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_click_on_login_button()"
});
formatter.result({
  "duration": 67546202,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_will_be_on_Home_page()"
});
formatter.result({
  "duration": 4353263,
  "status": "passed"
});
formatter.after({
  "duration": 70998226,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify image of logo",
  "description": "",
  "id": "jbk-offline-website;verify-image-of-logo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user should see a logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 6522750867,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_should_see_a_logo()"
});
formatter.result({
  "duration": 889010991,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "page headline",
  "description": "",
  "id": "jbk-offline-website;page-headline",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#Given user should be on login page"
    }
  ],
  "line": 24,
  "name": "user should see a headline of page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_see_a_headline_of_page()"
});
formatter.result({
  "duration": 439434,
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepdefs.LoginStepdef.user_should_see_a_headline_of_page(LoginStepdef.java:63)\r\n\tat ✽.Then user should see a headline of page(login.feature:24)\r\n",
  "status": "failed"
});
});