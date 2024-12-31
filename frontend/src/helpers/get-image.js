import { baseUrl } from "./apiClient";

export const getImage = (name) => {
  return `${baseUrl}/file/getFile/${name}`;
};
