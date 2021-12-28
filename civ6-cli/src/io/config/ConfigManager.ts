import { Config } from 'io/config/Config';
import { ConfigReader } from 'io/config/ConfigReader';

export class ConfigManager {
    private static _config: Config | undefined;

    public static get config(): Config {
        if (this._config === undefined) {
            throw new Error("Configの設定ファイルが読み込まれていません。");
        }
        return this._config;
    }

    // public async load(name: 'config') {
    //     await this.loadByName(name);
    // }

    // public async load(name: 'hoge') {
    //     await this.loadByName(name);
    // }

    /**
     * 設定ファイル(config.yml)を読み込む
     * @returns 読み込んだ設定の情報
     */
     public static async loadConfig(): Promise<Config> {
        const config = await new ConfigReader().read("config");

        // TODO debug
        console.log('config=%o', config);

        this._config = config;
        return config;
    }

    // private static _config: Config | null;

    // public static async load() {

    //     const config = await new ConfigReader().read('config');
    //     ConfigLoader._config = config;
    // }
}
