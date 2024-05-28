import { v4 as uuidV4 } from "uuid";

export const generateID = () => {
  return Math.floor(Math.random() * 90000) + 100000;
};
