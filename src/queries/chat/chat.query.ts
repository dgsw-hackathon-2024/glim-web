import chatRepositoryImpl from "src/repositories/chat/chatRepositoryImpl";
import { useMutation } from "react-query";

export const ChatBotMutation = () => {
  const mutation = useMutation((question: string) => chatRepositoryImpl.chat(question));
  return mutation;
};
