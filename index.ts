import { getExtensions } from "./core/initExtensions";
import { injectEnvVariables } from "./core/injectEnvVariables";
import { runTelegramBotService } from "./services";
import { IExtensions } from "./types/IExtensions";

const ext: IExtensions = getExtensions();

const main = async() => {
  injectEnvVariables();
  
  await runTelegramBotService(ext);
};

main();