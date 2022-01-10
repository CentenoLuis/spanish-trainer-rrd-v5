import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
});

export default yupResolver(schema);
