package cafe.pja.signcafe.service;

import org.springframework.jdbc.core.JdbcTemplate;

import cafe.pja.signcafe.dao.UserDao;
import cafe.pja.signcafe.domain.User;

public class UserServiceImpl implements UserService{
	private UserDao userDao;

	public UserServiceImpl(JdbcTemplate jdbcTemplate) {
		userDao = new UserDao(jdbcTemplate);
	}

	@Override
	public boolean addUser(User user) {
		if(userDao.duplicateCheck(user)) {
			System.out.println("해당 번호로 가입된 계정이 있습니다.");
			return false;
		} else {
			userDao.addUser(user);
			System.out.println("가입에 성공했습니다.");
			return true;
		}
	}
	
	@Override
	public boolean myPageLogin(User user) {
		if(userDao.userCheck(user)) {
			System.out.println("로그인에 성공했습니다.");
			return true;
		} else {
			System.out.println("입력하신 정보와 일치하는 회원정보가 없습니다.");
			return false;
		}
	}
	
	@Override
	public User userInfoByPhone(User user) {
		
		return userDao.searchUserByPhone(user);
	}
	
	/**
	 * 작성자 : 종성
	 * 
	 * 유저 정보수정 service
	 * 
	 * @param user
	 * @param connectUserPhone
	 */
	@Override
	public boolean updateUserInfo(User user, String connectUserPhone) {
		if(userDao.duplicateCheck(user) && !(user.getPhone().equals(connectUserPhone))) {
			return false;
		}
		userDao.updateUser(user, connectUserPhone);
		return true;
	}
	
	
	
	/**
	 * checkUser.jsp 에서 입력한 폰번호가 디비의 폰번호와 일치하는지 확인
	 */
	@Override
	public boolean checkUserbyPhone(User user) {
		if(userDao.duplicateCheck(user)) {
			System.out.println("폰번호 일치");
			return true;
		} else {
			System.out.println("폰번호 불일치");
			return false;
		}
	}

	
	public boolean updatePayment() {
		return false;
	}
	
	@Override
	public boolean calculMileage(String userPhone, double amount) {
		User userCommand = new User();
		userCommand.setPhone(userPhone);
		
		User findUser = userDao.searchUserByPhone(userCommand);
		
		if(findUser.getMileage() < amount) {
			return false;
		}
		
		double resultMileage = findUser.getMileage() - amount;
		userDao.updateMileage(findUser.getPhone(), resultMileage);
		
		return true;
	}

	public double findMileage(String userPhone) {
		User user = new User();
		user.setPhone(userPhone);
		return userDao.searchUserByPhone(user).getMileage();
	}

}
