import * as Yup from "yup"


export const reservationSchema = Yup.object({
    fullname: Yup.string()
    .required("Adınız  tələb olunur.")
    ,

    phoneNumber:Yup.string()
    .required("Nömrənizi qeyd edin.")
    .min(10,"Nomrəniz 10  rəqəmdən ibarət olmalıdır."),

    email:Yup.string()
    .required("Elektron adressinizi qeyd edin"),
    
    xidmet: Yup.string()
    .required("Bu xana doldurulmalidir.")
    ,

    elaveistek: Yup.string()
    .required("İstəklərinizi qeyd edin")
    .min(15,"İstəyinizi anlaya bilmək üçün daha ətraflı qeyd edin.")
})