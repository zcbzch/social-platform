export default {
    $_userInfo: async function(params) {
        return await this.$api.get.call(this, '/api/v1/user/userInfo', params)
    },
    $_userInfoChange: async function(params) {
        return await this.$api.post.call(this, '/api/v1/user/userInfo', params)
    },
    $_getFollowers: async function(params) {
        return await this.$api.get.call(this, '/api/v1/user/get_followers', params)
    },
    $_getFans: async function(params) {
        return await this.$api.get.call(this, '/api/v1/user/get_fans', params)
    },
    $_article: async function(params) {
        return await this.$api.get.call(this, '/api/v1/article/', params)
    },
    $_recommend: async function(params) {
        return await this.$api.get.call(this, '/api/v1/user/recommend', params)
    },
    $_comment: async function(params) {
        return await this.$api.get.call(this, '/api/v1/article/comment', params)
    },
    $_follow: async function(params) {
        return await this.$api.post.call(this, '/api/v1/user/follow', params)
    },
    $_deleteArticle: async function(params) {
        return await this.$api.delete.call(this, '/api/v1/article/', params)
    },
    $_submit: async function(params) {
        return await this.$api.post.call(this, '/api/v1/article/', params)
    },
    $_getMessage: async function(params) {
        return await this.$api.get.call(this, '/api/v1/user/message', params)
    },
}