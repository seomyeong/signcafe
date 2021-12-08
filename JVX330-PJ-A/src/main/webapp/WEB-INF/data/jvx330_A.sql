SELECT * FROM CAFE_USER;
SELECT * FROM MENU;
SELECT * FROM EXTRA;
SELECT * FROM CART;
SELECT * FROM CART_ID;
SELECT * FROM SALES;

DROP TABLE CAFE_USER;
DROP TABLE MENU;
DROP TABLE EXTRA;
DROP TABLE CART;
DROP TABLE CART_ID;
DROP TABLE SALES;

CREATE TABLE CAFE_USER(
	id			BIGINT		PRIMARY KEY GENERATED ALWAYS AS IDENTITY,		
	name		VARCHAR(30)		NOT NULL,
	phone		VARCHAR(20)		NOT NULL,
	passWd		VARCHAR(30)		NOT NULL,
	mileage		DOUBLE			NOT NULL	DEFAULT 0.0,
	regDate		TIMESTAMP		NOT NULL	DEFAULT CURRENT_TIMESTAMP
)


CREATE TABLE MENU(
	menuNum			BIGINT		PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	category		VARCHAR(50)		NOT NULL,
	menuName		VARCHAR(50)		NOT NULL,
	menuPrice		DOUBLE			NOT NULL DEFAULT 0.0,
	menuIng			VARCHAR(300)	NOT NULL
)

CREATE TABLE EXTRA(
	extraNum	BIGINT		PRIMARY KEY GENERATED ALWAYS AS IDENTITY,	
	HOT			DOUBLE			NOT NULL DEFAULT 0.0,
	ICE			DOUBLE			NOT NULL DEFAULT 500.0,
	SMALL		DOUBLE			NOT NULL DEFAULT 0.0,
	MEDIUM		DOUBLE			NOT NULL DEFAULT 300.0,
	LARGE		DOUBLE			NOT NULL DEFAULT 500.0
)


CREATE TABLE CART_ID(
	userCartId BIGINT NOT NULL PRIMARY KEY
)

CREATE TABLE CART(
	cartNum				BIGINT		PRIMARY KEY GENERATED ALWAYS AS IDENTITY,		
	userCartNum			BIGINT			NOT NULL,
	cart_menuName		VARCHAR(50)		NOT NULL DEFAULT 'NONE',
	cart_menuPrice		DOUBLE			NOT NULL DEFAULT 0.0,
	cart_menuCount		BIGINT			NOT NULL DEFAULT 0,
	cart_totalPrice		DOUBLE			NOT NULL DEFAULT 0.0,
	CONSTRAINT CART_ID_userCartNum_FK 
		FOREIGN KEY(userCartNum) REFERENCES CART_ID(userCartId)
)


CREATE TABLE SALES(
	salesNum			BIGINT		PRIMARY KEY GENERATED ALWAYS AS IDENTITY,		
	salesByCartNum		BIGINT			NOT NULL,
	sales_menuName		VARCHAR(50)		NOT NULL,
	sales_menuPrice		DOUBLE			NOT NULL DEFAULT 0.0,
	sales_menuCount		BIGINT			NOT NULL DEFAULT 0,
	sales_totalPrice	DOUBLE			NOT NULL DEFAULT 0.0
)


--******USER가 메뉴선택 버튼 눌렀을 때 고유번호 부여 ver1, ver2--
INSERT INTO CART_ID(userCartId) VALUES(1251);

--******메뉴선택 후 전송버튼(결제버튼x) 눌렀을 때 고유번호로 CART에 INSERT
INSERT INTO CART(userCartNum, cart_category, cart_menuName, cart_menuPrice, 
cart_menuCount, cart_size, cart_temp, cart_totalPrice)
VALUES(1251, 'COFFEE', 'AMERICANO', 4000.0, 2, 'S', 'H', 4000.0*2);

--******계속해서 주문메뉴 담을때마다 CART INSERT
INSERT INTO CART(userCartNum, cart_category, cart_menuName, cart_menuPrice, 
cart_menuCount, cart_size, cart_temp, cart_totalPrice)
VALUES(1251, 'OTHER', 'ICE TEA', 4500.0, 1, 'S', 'I', 4500.0*1);

--******주문취소 시 카트삭제
DELETE FROM CART where cartNum=1251;

---MENU INSERT---

INSERT INTO MENU(category, menuName, menuPrice) VALUES('COFFEE','제주 비자림 콜드 브루',8000.0);
INSERT INTO MENU(category, menuName, menuPrice) VALUES('COFFEE','콜드 브루 플로트',7800.0);
INSERT INTO MENU(category, menuName, menuPrice) VALUES('COFFEE','더블 에스프레소 칩 프라푸치노',7500.0);
INSERT INTO MENU(category, menuName, menuPrice) VALUES('COFFEE','사케라또 아포가또',7500.0);
INSERT INTO MENU(category, menuName, menuPrice) VALUES('COFFEE','스파클링 시트러스 에스프레소',7000.0);

INSERT INTO MENU(category, menuName, menuPrice) VALUES('NON_COFFEE','아이스 제주 유기 녹차',7500.0);
INSERT INTO MENU(category, menuName, menuPrice) VALUES('NON_COFFEE','아이스 콩고물 블랙 밀크 티',7000.0);
INSERT INTO MENU(category, menuName, menuPrice) VALUES('NON_COFFEE','아이스 제주 유기농 말차로 만든 라떼',8000.0);

INSERT INTO MENU(category, menuName, menuPrice) VALUES('FOOD','우유 품은 초콜릿 크루아상',6000.0);
INSERT INTO MENU(category, menuName, menuPrice) VALUES('FOOD','한 입에 쏙 치즈 꿀 볼',5500.0);
INSERT INTO MENU(category, menuName, menuPrice) VALUES('FOOD','트리플 치즈 크로크무슈',6500.0);



--test--
INSERT INTO TestUser(userId, passwd, userName, ssn, email, addr) 
VALUES ('hello001','000123','이서명','950529-2222222','hello001@naver.com','대구시 중구');
ALTER TABLE Account DROP CONSTRAINT Account_customerId_FK;