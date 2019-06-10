export default {
    $_userInfo: async function(params) {
        return await this.$api.get.call(this, 'http://47.106.249.150:5000/api/v1/user/userInfo', params)
    },
    $_userInfoChange: async function(params) {
        return await this.$api.post.call(this, 'http://47.106.249.150:5000/api/v1/user/userInfo', params)
    },

}