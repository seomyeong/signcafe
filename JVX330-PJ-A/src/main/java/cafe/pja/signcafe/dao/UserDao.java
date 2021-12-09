package cafe.pja.signcafe.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import cafe.pja.signcafe.domain.User;

public class UserDao {
	private JdbcTemplate jdbcTemplate;

	public UserDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	/**
	 * 작성자 : JongSeong
	 * 
	 * 기능 - User phone 중복검사 - 중복되면 true, 중복되지 않으면 false
	 * 
	 * @param user
	 * @return
	 */
	public Boolean DuplicateCheck(User user) {
		String sql = "SELECT * FROM CAFE_USER WHERE phone=?";
		List<User> findUser = null;

		findUser = jdbcTemplate.query(sql, new RowMapper<User>() {

			@Override
			public User mapRow(ResultSet rs, int rowNum) throws SQLException {
				return new User(rs.getString("name"), rs.getString("phone"), rs.getString("passWd"));
			}


		}, user.getPhone());

		if (findUser.size() == 0) {
			return false;
		}

		return true;
	}

	/**
	 * 작성자 : JongSeong
	 * 
	 * 기능 - User 추가
	 * 
	 * @param user
	 */
	public void addUser(User user) {
		String sql = "INSERT INTO CAFE_USER(name, phone, passWd) VALUES(?, ?, ?) ";
		jdbcTemplate.update(sql, user.getName(), user.getPhone(), user.getPassWd());
	}
}
