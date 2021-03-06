<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SignCafe</title>
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/common.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/myPage/myPageLogin.css">
</head>
<body>
<jsp:include page="/resources/incl/signCafeIncl.jsp"></jsp:include>	
<section id="myPageLoginPage">
	<div id="myPageLoginForm">
		<h1>SignCafe 로그인</h1>
		<p>회원확인을 위해 회원정보를 입력해주세요.</p>
		<form action="myPageLogin" method="POST">
			<table>
				<tr>
					<th>연락처</th>
					<td><input value="" type="text" autocomplete="off" name="phone" id="phone" pattern="[0-9]+" maxlength="11" minlength="11" placeholder="-를 제외하고 입력해주세요" required></td>
				</tr>
				<tr>
					<th>비밀번호</th>
					<td><input value="" type="password" autocomplete="off" name="passWd" id="pw" maxlength="20" placeholder="비밀번호를 입력해주세요" required></td>
				</tr>
			</table>
			<p>${errormsg}</p>
			<div id="myPageLoginBtn">
				<a href="../index.jsp">이전</a>
				<input type="submit" value="로그인"> 
			</div>
		</form>
	</div>
</body>
</html>