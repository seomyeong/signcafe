package cafe.pja.signcafe.web.command;

public class PaymentCommand {
	
	private String creditCard;
	private String cardNum;
	private double mileage;
	private double amount;
	private double orderPrice;
	
	
	public PaymentCommand() {}
	
	public PaymentCommand(String creditCard, String cardNum, double mileage, int amount, double orderPrice) {
		super();
		this.creditCard = creditCard;
		this.cardNum = cardNum;
		this.mileage = mileage;
		this.amount = amount;
		this.orderPrice = orderPrice;
	}

	public String getCreditCard() {
		return creditCard;
	}

	public void setCreditCard(String creditCard) {
		this.creditCard = creditCard;
	}

	public String getCardNum() {
		return cardNum;
	}

	public void setCardNum(String cardNum) {
		this.cardNum = cardNum;
	}

	public double getMileage() {
		return mileage;
	}

	public void setMileage(double mileage) {
		this.mileage = mileage;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public double getOrderPrice() {
		return orderPrice;
	}

	public void setOrderPrice(double orderPrice) {
		this.orderPrice = orderPrice;
	}

}