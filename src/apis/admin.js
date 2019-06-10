export default {
    $_getUser: async function(params) {
        return await this.$api.get.call(this, '/api/v1/admin/user', params)
    },
    $_deleteUser: async function(params) {
        return await this.$api.delete.call(this, '/api/v1/admin/user', params)
    },
    $_banUser: async function(params) {
        return await this.$api.patch.call(this, '/api/v1/admin/user', params)
    },
    $_notify: async function(params) {
        return await this.$api.post.call(this, '/api/v1/admin/notify', params)
    },
    $_deleteNotice: async function(params) {
        return await this.$api.delete.call(this, '/api/v1/user/message', params)
    },
}
