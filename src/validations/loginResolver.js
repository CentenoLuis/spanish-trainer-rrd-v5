import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});

export default yupResolver(schema);
