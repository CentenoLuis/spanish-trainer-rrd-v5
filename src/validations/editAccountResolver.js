import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  role: yup.string().oneOf(["regular", "admin"]),
});

export default yupResolver(schema);
