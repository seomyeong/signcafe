package cafe.pja.signcafe.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import cafe.pja.signcafe.domain.User;

@Controller("controller.myPageLoginController")
public class MyPageLoginController {
	
	@GetMapping("myPageService/myPageLogin")
	public String myPageLoginForm() {
		return "myPageService/myPageLogin";
	}
	
	@PostMapping("myPageService/myPageLogin")
	public String myPageLogin(@ModelAttribute User user) {
		return "myPageService/myPageLogin";
	}
}