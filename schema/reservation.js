import * as Yup from "yup"


export const reservationSchema = Yup.object({
    fullname: Yup.string()
    .required("Adınızı qeyd edin.")
    ,

    phoneNumber:Yup.string()
    .required("Nömrənizi qeyd edin.")
    .min(10,"Nomrəniz 10  rəqəmdən ibarət olmalıdır."),

    email:Yup.string()
    .required("Elektron ünvanı qeyd edin."),
    
    xidmet: Yup.string()
    .required("Bu xana doldurulmalidir.")
    ,

    elaveistek: Yup.string()
    .required("Mətn qeyd edin.")
    .min(15,"Mətn qeyd edin.")
})