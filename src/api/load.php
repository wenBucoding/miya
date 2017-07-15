<?php
	include 'connet.php';

	//用户
	$phone = isset($_GET['phone']) ? $_GET['phone'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	// md5加密
	$password = md5($password);


	$arr=array("phone"=>"$phone","password"=>"$password");

	// 查找所有用户信息
	$sql = "select phone,password from user ";


	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);

	if(in_array($arr, $row)){
		echo "ok";
	}else{
		echo "no";
	};
	//关闭连接
	$conn->close();
?>