package cafe.pja.signcafe.domain;

public class User {
	
	private long id; // PK
	private String name;
	private String phone;
	private String passWd;
	private double mileage;
	private String regDate;

	
	public User() {}
	
	public User(String name, String phone, String passWd) {
		super();
		this.name = name;
		this.phone = phone;
		this.passWd = passWd;
	}
	
	public User(String name, String phone, String passWd, double mileage) {
		super();
		this.name = name;
		this.phone = phone;
		this.passWd = passWd;
		this.mileage = mileage;
	}
	
	public User(long id, String name, String phone, String passWd, double mileage, String regDate) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.passWd = passWd;
		this.mileage = mileage;
		this.regDate = regDate;
	}

	public User(String phone, String passWd) {
		super();
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
	public String getRegDate() {
		return regDate;
	}
	public void setRegDate(String regDate) {
		this.regDate = regDate;
	}
	
	
}
