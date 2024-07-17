import { emailStore } from "src/store/emailStore/emailStore";

const useSignupPw = () => {
  const email = emailStore((state) => state.email);
};
