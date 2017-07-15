<?php
	/*
		与用户相关的所有操作
		* 增 insert
		* 删 delete
		* 查 select
		* 改 update
	 */
	
	// 第一步
	// 配置信息
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$database = 'h5_1703';

	// 连接数据库
	$conn = new mysqli($servername,$username,$password,$database);


	// 设置编码格式
	$conn->set_charset('utf8');

	// 用户手机
	$phone= isset($_GET['phone']) ? $_GET['phone'] : '';

	// 查找所有用户信息
	$sql = "select phone,password from user";

	// 查找指定手机信息
	if($phone){
		$sql .= " where phone='$phone'";
	}

	// 查询数据库
	$result = $conn->query($sql);

	//使用查询结果	
	$row = $result->fetch_all(MYSQLI_ASSOC);

	echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>