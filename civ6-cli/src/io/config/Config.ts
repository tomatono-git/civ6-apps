// import { ConfigReader } from "io/reader/ConfigReader";

/**
 * 設定ファイル(config.yml)の情報
 */
export class Config {

    // private static _instance: Config | null;

    // public static get instance(): Config {
    //     if (this._instance == null) {
    //         throw new Error('Configの設定ファイルが読み込まれていません。');
    //     }
    //     return this._instance;
    // }

    /** Civilization 6 のインストール先ディレクトリ */
    install_dir?: string;

    /** 登録ユーザー名 */
    create_user?: string;

    /** 登録ユーザー名 */
    update_user?: string;

    /**
     * コンストラクタ
     * @param props プロパティ
     */
     public constructor(props?: Partial<Config>) {
        Object.assign(this, props ? props : {});
    }

    // /**
    //  * 設定ファイルを読み込む
    //  */
    // public static async load() {
    //     const config = await new ConfigReader().read('config');
    //     Config._instance = config;
    // }
}
