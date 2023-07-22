import { IExtensions } from "../types/IExtensions";

export const runTelegramBotService = (ext: IExtensions) => {
  const API_KEY = process.env.TELEGRAM_API_KEY;

  if (!API_KEY) {
    ext.logger.error('TELEGRAM_API_KEY not exist. Service wasn\'t running.')

    return;
  }

  ext.logger.debug('Telegram service was running');
}