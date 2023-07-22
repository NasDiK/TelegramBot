import { Fetcher } from "../core/models/fetcher";
import { ILogger } from "./ILogger";

export interface IExtensions {
  logger: ILogger;
  fetcher: () => Fetcher;
}