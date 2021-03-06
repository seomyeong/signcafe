<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>SignCafe</title>
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/common.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/resources/css/user/add_user.css">
</head>

<body>
<jsp:include page="/resources/incl/signCafeIncl.jsp"></jsp:include>	
    
    <section id="addUserPage">
        <div id="addUserForm">
            <h2>멤버십 가입</h2>
            <form action="addUser" method="POST">
                <table>
                    <tr>
                        <th>이름</th>
                        <td><input type="text" name="name" autocomplete="off" placeholder="이름을 입력하세요." required></td>
                    </tr>

                    <tr>
                        <th>연락처</th>
                        <td><input type="text" name="phone" autocomplete="off" placeholder="전화번호를 입력하세요." pattern="[0-9]+" maxlength="11" minlength="11" required></td>
                    </tr>

                    <tr>
                        <th>비밀번호</th>
                        <td><input type="password" name="passWd" autocomplete="off" placeholder="비밀번호를 입력하세요." maxlength="20" required></td>
                    </tr>
                </table>
                <div id="addUsericon">
                    <a href="../index.jsp">이전</a> <input type="submit" value="가입">
                </div>
                <p>${errormsg}</p>
            </form>
        </div>
    </section>

</body>
</html>