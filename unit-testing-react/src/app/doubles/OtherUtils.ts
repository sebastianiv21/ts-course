import { v4 } from "uuid";

export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallback = (arg: string) => void;

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
  return arg.toLowerCase() + v4();
}

export function calculateComplexity(arg: stringInfo) {
  return Object.keys(arg.extraInfo).length * arg.length;
}

export function toUpperCaseWithCb(
  arg: string,
  callback: LoggerServiceCallback,
) {
  if (!arg) {
    callback("no arg provided");
    return;
  }

  callback(`called function with ${arg}`);
  return arg.toUpperCase();
}

export class OtherStringUtils {
  public callExternalService() {}

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
