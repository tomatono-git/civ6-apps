import { Config } from 'io/config/Config';
import { ConfigReader } from 'io/config/ConfigReader';

export class ConfigLoader {

    private static _config: Config | null;

    public static async load() {

        const config = await new ConfigReader().read('config');
        ConfigLoader._config = config;
    }
}
