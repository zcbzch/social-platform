export default {
    $_login: async function(params) {
        return await this.$api.post.call(this, '/api/v1/user/login', params)
    },
    $_register: async function(params) {
        return await this.$api.post.call(this, '/api/v1/user/register', params)
    },
    $_loginAdmin: async function(params) {
        return await this.$api.post.call(this, '/api/v1/admin/login', params)
    },
}
