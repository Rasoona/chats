import validator from "validator";

export default {
    install: function (Vue){
        Object.defineProperty(Vue.prototype, '$v', {value: validator})
    }
}