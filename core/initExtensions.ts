import {Fetcher} from "./models/fetcher";
import {ILogger} from "../types/ILogger";
import {IExtensions} from "../types/IExtensions";

export const getExtensions = (): IExtensions => {
  const logger: ILogger = console;
  const fetcher: () => Fetcher = () => new Fetcher();

  return {logger, fetcher}
};