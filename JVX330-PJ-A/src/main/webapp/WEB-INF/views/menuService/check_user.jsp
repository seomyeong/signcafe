<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SignCafe</title>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/resources/js/jquery-3.6.0.js"></script>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/common.css">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/menu/checkUser.css">
</head>
<body>
	<jsp:include page="/resources/incl/signCafeIncl.jsp"></jsp:include>
	
	<section id="checkUserPage">
		<div id="checkUserForm">
			<h2>적립하시겠습니까?</h2>
			<p>등록된 휴대전화 번호를 입력하세요</p>
			<form action="payment" method="POST">
				<table>
					<tr>
						<th>Phone</th>
						<td><input value="" type="text" autocomplete="off"
							name="phone" id="phone" maxlength="11"
							placeholder="-를 제외하고 입력해주세요"></td>
						<td class="confirm"><input type="submit" value="확인 및 결제"></td>
					</tr>
				</table>
			<p>${errorMsg}</p>
			</form>
			<div id="addUserBtn">멤버쉽가입</div>

			<div id="checkUserBtn">
				<a href="<%=request.getContextPath()%>/menuService/menuPage">이전</a>
				<a href="<%=request.getContextPath()%>/menuService/payment">바로결제</a>
			</div>
		</div>
	</section>
	<script>
        $('#addUserBtn').on('click', function () {
        	window.open("<%=request.getContextPath()%>/addUserService/addUser","popup1","width=1280, height=700, left=100, top=50")
        	})
	</script></body>
</html>