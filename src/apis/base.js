const handlerResult = function (data) {
    
    // if (code != 1) {
    //     this.$message.warning(data.message);
    //     return false;
    // } 
    // else {
    //     return data
        // let object = {};
        // for (let i in data) {
        //     if (["message", "code", "data"].indexOf(i) == -1) {
        //         object[i] = data[i]
        //     }
        // }
        // if (Object.keys(object).length == 0) {
        //     return data.data;
        // } else {
        //     object.data = data.data;
        //     return object;
        // }
    // }
}

const handlerException = function (err) {
    if (err.response.data && err.response.data.message) {
        let {
            code,
            message
        } = err.response.data;
        // this.$api.token.check.call(this, code, message);
        if(message.slice(0, 5) == "token") {
            this.$api.token.error.call(this);
        }
        
        this.$message.error(message);
    } else {
        this.$message.error(`${err.response.status} ${err.response.statusText}`);
    }
}

const handleRequest = async function (option) {
    let log = new Log("API/handleRequest");
    log.debug(option.url, option.params);
    switch (option.type) {
        case "get":
            return await this.$api.get.call(this, option.url, option.params);
        case "post":
            return await this.$api.post.call(this, option.url, option.params);
        case "put":
            return await this.$api.put.call(this, option.url, option.params);
        case "patch":
            return await this.$api.patch.call(this, option.url, option.params);
        case "delete":
            return await this.$api.delete.call(this, option.url, option.params);
        case "getFile":
            return await this.$api.getFile.call(this, option.url, option.params);
        case "postFile":
            return await this.$api.postFile.call(this, option.url, option.params);
        case "putFile":
            return await this.$api.putFile.call(this, option.url, option.params);
        case "file":
            return await this.$api.file.call(this, option.url, option.params);
    }
}

export default {
    get: async function (url = "", params = {}, $_success = function (data) {}, $_error = function (err) {}) {
         let log = new Log("API/Base/GET");
        return await axios.get(url, {
                params,
            })
            .then(res => {
                $_success.call(this, res);
                return res.data
            })
            .catch(err => {
                handlerException.call(this, err);
                $_error.call(this, err);
                return false;
            })
    },
    post: async function (url = "", params = {}, $_success = function (data) {}, $_error = function (err) {}) {
        let log = new Log("API/Base/POST");
        return await axios.post(url, params)
            .then(res => {
                $_success.call(this, res);
                return res.data
            })
            .catch(err => {
                handlerException.call(this, err);
                $_error.call(this, err);
                return false;
            })
    },
    put: async function (url = "", params = {}, $_success = function (data) {}, $_error = function (err) {}) {
         let log = new Log("API/Base/Put");
        return await axios.put(url, params)
            .then(res => {
                $_success.call(this, res);
                return res.data
            })
            .catch(err => {
                handlerException.call(this, err);
                $_error.call(this, err);
                return false;
            })
    },
    patch: async function (url = "", params = {}, $_success = function (data) {}, $_error = function (err) {}) {
         let log = new Log("API/Base/PATCH");
        return await axios.patch(url, params)
            .then(res => {
                $_success.call(this, res);
                return res.data
            })
            .catch(err => {
                handlerException.call(this, err);
                $_error.call(this, err);
                return false;
            })
    },
    delete: async function (url = "", params = {}, $_success = function (data) {}, $_error = function (err) {}) {
         let log = new Log("API/Base/Delete");
        return await axios.delete(url, {
                params,
            })
            .then(res => {
                $_success.call(this, res);
                return res.data
            })
            .catch(err => {
                handlerException.call(this, err);
                $_error.call(this, err);
                return false;
            })
    },
    getFile: async function (url = "", params = {}, $_success = function (data) {}, $_error = function (err) {}) {
        let log = new Log("API/Base/GET_FILE");
        return await axios({
                method: 'get',
                url: url,
                responseType: 'blob',
                params: params
            })
            .then(res => {
                log.error(res);
                let filename = res.headers['content-disposition']?decodeURI(res.headers['content-disposition'].split(";")[1].split("=")[1]):"未命名文件";
                let blob = new Blob([res.data])
                let a = document.createElement('a');
                a.download = filename;
                a.href = window.URL.createObjectURL(blob);
                a.click();
                $_success.call(this, res.data);
                return true;
            })
            .catch(err => {
                handlerException.call(this, err);
                $_error.call(this, err);
                return false;
            })
    },
    postFile: async function (url = "", params = {}, $_success = function (data) {}, $_error = function (err) {}) {
         let log = new Log("API/Base/POST_FILE");
        return await axios.post(url, params)
            .then(res => res.data)
            .then(data => {
                $_success.call(this, data);
                return handlerResult.call(this, data);
            })
            .catch(err => {
                handlerException.call(this, err);
                $_error.call(this, err);
                return false;
            })
    },
    putFile: async function (url = "", params = {}, $_success = function (data) {}, $_error = function (err) {}) {
         let log = new Log("API/Base/PUT_FILE");
        return await axios.put(url, params)
            .then(res => res.data)
            .then(data => {
                $_success.call(this, data);
                return handlerResult.call(this, data);
            })
            .catch(err => {
                handlerException.call(this, err);
                $_error.call(this, err);
                return false;
            })
    },
    file: async function (url = "", params = {}, $_success = function (data) {}, $_error = function (err) {}) {
         let log = new Log("API/Base/GET_FILE");
        return await axios({
                method: 'get',
                url: url,
            })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                handlerException.call(this, err);
                $_error.call(this, err);
                return false;
            })
    },
    handleRequest,
}