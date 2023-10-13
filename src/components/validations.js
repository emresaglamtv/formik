import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email().required(), // string olarak gönderir. required ile doldurulmasını zorunlu kılar.
    password: yup.string().min(5).required(), //minimum 5 karakter olmasını zorunlu kılar. 
    passwordConfirm: yup.string().oneOf([yup.ref('password')]).required(), // oneOf ile password'ü referans alır. Birebir aynısı olmasını ister.
});

export default validations;