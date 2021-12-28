import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

import { Config } from 'io/config/Config';

/**
 * 設定ファイルを読み込むクラス
 */
export class ConfigReader {

    /**
     * 設定ファイルを読み込む
     * @param name 設定ファイル名(拡張子は除く)
     * @returns 読み込んだ設定の情報
     */
    public async read(name: string) : Promise<Config> {
        let configPath = path.join('./config', `${name}.yml`);
        let exists = await fs.existsSync(configPath);
        if (!exists) {
            configPath = path.join('./config', `${name}.yaml`);
        }
        return await this.readByPath(configPath);
    }

    /**
     * 指定したファイルパスの設定を読み込む
     * @param configPath 設定ファイルのパス
     * @returns 読み込んだ設定の情報
     */
    public async readByPath(configPath: string) : Promise<Config> {
        const configFile = await fs.readFileSync(configPath, 'utf8')
        const _config = YAML.parse(configFile);
        const config = new Config(_config);
        return config;
    }
}