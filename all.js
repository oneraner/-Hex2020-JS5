Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
Vue.component('ValidationProvider', VeeValidate.ValidationObserver);
VeeValidate.configure({
    classes: {
      valid: 'is-valid',
      invalid: 'is-invalid',
    }
});
import zh_TW from './zh_TW.js';
VeeValidate.localize('tw', zh_TW);

new Vue({
    el:'#app',
    data:{
        products:[],
        tempProduct:{
            num:0,
        },
        status:{
            loadingItem:'',
        },
        form:{
            name:'',
            email:'',
            tel:'',
            address:'',
            payment:'',
            message:'',
        },
        UUID:'',
        APIPATH:'',
    },
    methods:{

    },
})

