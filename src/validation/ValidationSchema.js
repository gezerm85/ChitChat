import * as yup from "yup";

export const ValidationSchema = yup.object({
    displayName: yup.string().required("Kullanıcı Adı zorunlu"),
    email: yup.string().email("Geçerli bir email adresi girin").required("Email zorunlu"),
    password: yup.string().required("Şifre zorunlu"),
    confirmPassword: yup.string()
        .required("Şifre tekrarı zorunlu")
        .oneOf([yup.ref("password")], "Şifreler eşleşmiyor")
});


export const ValidationSchemaLogin = yup.object({
    email: yup.string().email("Geçerli bir email adresi girin").required("Email zorunlu"),
    password: yup.string().required("Şifre zorunlu")
});
