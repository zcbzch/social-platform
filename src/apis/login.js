export default {
    $_login: async function(params) {
        return await this.$api.post.call(this, 'http://47.106.249.150:5000/api/v1/user/login', params)
    },
    $_register: async function(params) {
        return await this.$api.post.call(this, 'http://47.106.249.150:5000/api/v1/user/register', params)
    },
}
