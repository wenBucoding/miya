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
	$userphone = 'root';
	$password = '';
	$database = 'h5_1703';

	// 连接数据库
	$conn = new mysqli($servername,$userphone,$password,$database);


	// 设置编码格式
	$conn->set_charset('utf8');

	// 接收前端传回的数据
	$phone = isset($_GET['phone']) ? $_GET['phone'] : '';
	$password = isset($_GET['password']) ? $_GET['password'] : '123456';	

	$sql = "select phone from user where phone='$phone'";

	// 获取查询结果
	$res = $conn->query($sql);

		// 使用查询结果集
	$rows = $res->fetch_all(MYSQLI_ASSOC);
	// print_r($rows);
	
	
	// 直接从数据库获取用户名为$username的数据，能获取到说明已存在，否则不存在
	if($rows){
		echo '用户手机已经存在';
	}else{
		
		// md5加密
		$password = md5($password);

		$sql = "insert into user (phone,password) values('$phone','$password')";

		// 获取查询结果
		$res = $conn->query($sql);

		if($res){
			echo "ok";
		}else{
			echo "Error: " . $sql . "<br>" . $conn->error;
		}	
	}

	//关闭连接
	$conn->close();


?>