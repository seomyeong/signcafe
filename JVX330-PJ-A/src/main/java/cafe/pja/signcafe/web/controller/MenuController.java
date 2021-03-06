package cafe.pja.signcafe.web.controller;

import java.util.List;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import cafe.pja.signcafe.data.DataSourceConfig;
import cafe.pja.signcafe.domain.MenuInfo;
import cafe.pja.signcafe.service.MenuServiceImpl;

@Controller("controller.menuController")
public class MenuController {
	@GetMapping("menuService/menuPage")
	public ModelAndView menuPageGet() {
		GenericApplicationContext context = new AnnotationConfigApplicationContext(DataSourceConfig.class);
		MenuServiceImpl menuService = (MenuServiceImpl) context.getBean("menuServiceImpl");

		ModelAndView mav = new ModelAndView();

		// menu_Page.jsp 진입시 메뉴목록들을 보여준다.
		List<MenuInfo> menuInfoList = menuService.allMenu();
		mav.addObject("menuInfoList", menuInfoList);

		mav.setViewName("menuService/menu_Page");

		context.close();
		return mav;
	}

	
	@PostMapping("menuService/menuPage")
	public ModelAndView menuPage() {
		GenericApplicationContext context = new AnnotationConfigApplicationContext(DataSourceConfig.class);
		MenuServiceImpl menuService = (MenuServiceImpl) context.getBean("menuServiceImpl");

		ModelAndView mav = new ModelAndView();

		List<MenuInfo> menuInfoList = menuService.allMenu();
		mav.addObject("menuInfoList", menuInfoList);

		mav.setViewName("menuService/menu_Page");

		context.close();
		return mav;
	}

}