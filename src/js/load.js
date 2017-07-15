;require(['config'],()=>{
	require(['jquery'],function($){

		$('#btn').on('click',function(){
			var $phone = $('#phone').val();
			var $password = $('#password').val();

			$.ajax({
				url:'../api/load.php',
				data:{
					phone:$phone,
					password:$password
				},
				success:function(res){
					console.log(res);
					if(res === 'ok'){
						location.href = '../index.html?use='+$phone;						
					}else{
						alert('用户名或密码错误，请重新输入');
						$(':input').val('');
					}
				}
			})

			return false;

		});




	});
});