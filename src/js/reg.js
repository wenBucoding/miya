;require(['config'],()=>{
	require(['jquery','messages','validate'],($)=>{
		$('#btn').on('click',()=>{
			var $phone = $('#phone').val();
			var $password = $('#password').val();
			var $confirmPassword = $('#confirmPassword').val();
			if($password != $confirmPassword){
				$('#confirmPassword').val('');
				$('#password').val('');
				alert('两次密码输入不一致，请重新输入');

			}else if($phone == '' || $password == ''){
				
				alert('用户名密码不能为空值');
			}else{
				$.ajax({
					url:'../api/create_user.php',
					data:{
						phone:$('#phone').val(),
						password:$('#password').val(),					
					},
					success:(res)=>{
						console.log(res);
						if(res === 'ok'){
								alert('恭喜您注册成功，赶紧登陆抢购吧！');
							}else if(res == '用户手机已经存在'){
								alert('用户名已经存在，请另起一个用户名');
								$(':input').val('');
							}
					}
				});
			}
			


			return false;
		});
		

		//表单验证
		$('form').validate({
                // 验证规则
                rules:{
                	 phone:{
                        number:true,
                        rangelength:[11,11]
                    },
                   
                    password:{
                        required:true,
                        rangelength:[6,12]
                    },
                   	
                   	confirmPassword: {
                   		required:true,
      					equalTo: "#password"
    				},
                    
                },

                // 自定义提示
                messages:{
                    phone:{
                        required:'这是必填的',
                        rangelength:'输入的号码不合法'
                    },

                    password:{
                        required:'这是必填的',
                        rangelength:'输入的密码太弱'
                    },

                    
                }
        })

       

	});
});