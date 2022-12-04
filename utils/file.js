import { promises as fsPromises } from "fs";
import path from "path";

export const processInputRaw = async (inputPath) => {
  const input = await fsPromises.readFile(inputPath, "utf8");
  return input.toString();
}