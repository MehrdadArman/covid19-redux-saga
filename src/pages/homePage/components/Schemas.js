import * as yup from "yup";

export const formSchema = yup.object({
  firstName: yup.string().required("Please write your firstName"),
  lastName: yup.string().required("Please write your lastName"),
});
