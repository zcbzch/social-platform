export default {
    error: async function(){
        this.$router.push({name:"login"});
    },
    // check: async function(){
    //     if(window.sessionStorage.token){
    //         axios.defaults.headers.common = {
    //             Authorization: "Onekeeper "+window.sessionStorage.token,
    //         };
    //     } else {
    //         this.$router.push({name: "login"});
    //     }
    // },
}