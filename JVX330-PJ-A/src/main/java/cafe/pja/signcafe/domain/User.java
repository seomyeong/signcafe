package cafe.pja.signcafe.domain;

import java.util.Date;

public class User {
	private long id; // PK
	private String name;
	private String phone;
	private String passWd;
	private double mileage;
	private Date regDate;
<<<<<<< HEAD

=======
	
	public User() {}
	
	public User(String name, String phone, String passWd) {
		super();
		this.name = name;
		this.phone = phone;
		this.passWd = passWd;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPassWd() {
		return passWd;
	}
	public void setPassWd(String passWd) {
		this.passWd = passWd;
	}
	public double getMileage() {
		return mileage;
	}
	public void setMileage(double mileage) {
		this.mileage = mileage;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	
	
>>>>>>> branch 'main' of https://github.com/seomyeong/JVX330-PJ-A.git
}
