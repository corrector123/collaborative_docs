import { fetch } from "@/core/index.js";

export const createFolder_API = (data) => {
  return fetch({
    url: "/folder/createFolder",
    method: "post",
    data,
  });
};
