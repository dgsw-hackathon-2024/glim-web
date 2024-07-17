import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../auth/signup";
import EmailSign from "../auth/signup/EmailSign";
import PasswordSign from "../auth/signup/PasswordSign";
import GlobalStyle from "src/styles/global";
import Login from "../auth/login";
import { QueryClient, QueryClientProvider } from "react-query";
import LawTest from "src/components/main/select/test/index";
import Service from "../main/select/service";
import Test1 from "../main/test/1/index";
import Test2 from "../main/test/2/index";
import Test3 from "../main/test/3/index";
import Test4 from "../main/test/4/index";
import Test5 from "../main/test/5/index";

const Router = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signup/email" element={<EmailSign />}></Route>
          <Route path="/signup/password" element={<PasswordSign />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/choice/test" element={<LawTest />} />
          <Route path="/choice/service" element={<Service />} />
          <Route path="/test/1" element={<Test1 />} />
          <Route path="/test/2" element={<Test2 />} />
          <Route path="/test/3" element={<Test3 />} />
          <Route path="/test/4" element={<Test4 />} />
          <Route path="/test/5" element={<Test5 />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default Router;
