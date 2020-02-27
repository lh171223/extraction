<%@ page contentType="text/html; UTF-8" language="java" %>
<%--
  Created by IntelliJ IDEA.
  User: 15325
  Date: 2020/2/5
  Time: 13:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>User Messagers</title>
</head>
<body>
<table>
    <tr>
        <th>Id</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>性别</th>
    </tr>
    <tr th:each="user : ${users}">
        <td th:text="${user.id}"></td>
        <td th:text="${user.name}"></td>
        <td th:text="${user.age}"></td>
        <td th:text="${user.sex}"></td>
    </tr>
</table>
</body>
</html>
