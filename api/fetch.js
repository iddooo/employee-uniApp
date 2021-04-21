let BASE_URL = "https://heart.synpowertech.com"

module.exports = {
	fetch(option){
		let token = uni.getStorageSync('token');
		// 测试
		// token = 'a04b6eac-46e6-427a-ad70-cd4c7a629cf4'
		return new Promise((resolve,reject) => {
			uni.request({
				url:BASE_URL + option.url,
				method:option.method || 'GET',// 必须大写
				header:option.header || {
					'content-type':"application/json",
					'Authorization':token && 'bearer ' + token
				},
				data:option.data,
				success:(res)=>{
					if(res.data.status=='401' || res.statusCode == 401){
						// goLoginPageTimeOut()
						// reject(res.data)
					}
	
					if(res.data.code==0){
						let title = '服务器开小差了，请再试一次'
						if(res.data.message!='' || res.data.message != null){
							title = res.data.message || res.data.msg
						}
						uni.showToast({
							title:title,
							icon:"none",
							duration:2000
						})
					}
					resolve(res.data)
				},
				fail:(err)=>{
					// console.log(err)
					// goLoginPageTimeOut()
					reject(err)
				}
			})
		})
	}
}