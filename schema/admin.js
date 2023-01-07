import * as Yup from "yup";

export const adminSchema = Yup.object({
  username: Yup.string()
    .required("NickName səhvdir.")
    .min(3, "Min-3 əlifba və rəqəm."),
  password: Yup.string()
    .required("Şifrə səhvdir.")
    .min(8, "Min-8 əlifba və rəqəm.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Şifrədə ən azı bir böyük hərf, bir kiçik hərf, bir rəqəm və bir xüsusi simvol olmalıdır."
    ),
});
