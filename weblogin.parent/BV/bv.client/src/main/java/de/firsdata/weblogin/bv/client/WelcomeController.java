package de.firsdata.weblogin.bv.client;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/welcome")
public class WelcomeController {

	@RequestMapping("/layout")
	public String getWelcomePage() {
		return "welcome";
	}
}
