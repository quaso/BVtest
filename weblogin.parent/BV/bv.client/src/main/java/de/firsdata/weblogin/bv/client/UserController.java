package de.firsdata.weblogin.bv.client;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {
	
	@RequestMapping("add/layout")
	public String getCreateLayout() {
		return "createUser";
	}
}
