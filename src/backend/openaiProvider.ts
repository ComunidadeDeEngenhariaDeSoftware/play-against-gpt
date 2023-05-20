import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: ""
});

const openai = new OpenAIApi(config);

export type GetChatResponse = (message: string) => any;

export const getChatResponseImpl: GetChatResponse = async (message: string) => {
  try {

  } catch (err) {

  }
};
