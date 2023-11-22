export type stringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallback = (arg: string) => void;

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
