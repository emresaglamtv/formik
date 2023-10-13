import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir email giriniz.").required('Zorunlu alan.'), // string olarak gönderir. required ile doldurulmasını zorunlu kılar.
    password: yup.string().min(5, 'Parolanız en az 5 karakter olmalıdır.').required('Zorunlu alan.'), //minimum 5 karakter olmasını zorunlu kılar. 
    passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Parolanız uyuşmuyor.').required('Zorunlu alan.'), // oneOf ile password'ü referans alır. Birebir aynısı olmasını ister.
});

export default validations;