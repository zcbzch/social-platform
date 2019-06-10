import base from './base.js'
import token from './token.js'
import login from './login.js'
import home from './home.js'

const install = (Vue) => {
    Vue.prototype.$api = {
        get: base.get,
        post: base.post,
        put: base.put,
        patch: base.patch,
        delete: base.delete,
        getFile: base.getFile,
        postFile: base.postFile,
        putFile: base.putFile,
        file: base.file,
        handleRequest: base.handleRequest,
        token,
        login,
        home,
    }
}

export default {
    install
}