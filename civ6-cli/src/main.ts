import path from 'path';
// import { Connection, createConnection, getRepository } from 'typeorm';

// import { ConfigReader } from 'io/config/ConfigReader';
import { ConfigManager } from 'io/config/ConfigManager';
import { XmlReader } from 'io/reader/XmlReader';
import { UnitsXmlParser } from 'io/parser/UnitsXmlParser';

// import { Unit } from 'db/entity/Unit';
import { UnitRepository } from 'db/repository/UnitRepository';

export class Main {
    public static async execute() {

        var args = process.argv;

        // 設定ファイルを読み込む
        const config = await ConfigManager.loadConfig();

        // インストール先
        const installDir = (config.install_dir as string).replace('\\', '/');
        // Units.xml のパス
        const unitsPath = path.join(installDir, 'Base/Assets/Gameplay/Data/Units.xml');

        // Units.xml を読み込む
        const unitsXml = await new XmlReader().read(unitsPath);
        // Units.xml をパース
        const units = new UnitsXmlParser().parse(unitsXml);

        const repository = new UnitRepository();
        // ユニットをDBに登録
        const result = repository.save(units);

        // TODO debug
        console.log('ユニットをDBに登録: %o', result);

        // let connection: Connection | null = null;
        // try {
        //     // DBに接続
        //     connection = await createConnection();

        //     const userRepository = getRepository(Unit);
        //     // ユニットをDBに登録
        //     userRepository.save(units);
        // } finally {
        //     if (connection != null) {
        //         // DB接続を閉じる
        //         connection.close();
        //     }
        // }
    }
}

// const action = async () => {

//     // 設定ファイルを読み込む
//     const config = await ConfigManager.loadConfig();
//     // const config = await new ConfigReader().read('config');
//     // const configFile = fs.readFileSync('./config/config.yaml', 'utf8');
//     // const config = YAML.parse(configFile);

//     // // TODO debug
//     // console.log('config=%o', config);

//     // インストール先
//     const installDir = (config.install_dir as string).replace('\\', '/');
//     // Units.xml のパス
//     const unitsPath = path.join(installDir, 'Base/Assets/Gameplay/Data/Units.xml');

//     // Units.xml を読み込む
//     const unitsXml = await new XmlReader().read(unitsPath);
//     // Units.xml をパース
//     const units = new UnitsXmlParser().parse(unitsXml);

//     let connection: Connection | null = null;
//     try {
//         connection = await createConnection();

//         const userRepository = getRepository(Unit);
//         userRepository.save(units);
//     } finally {
//         if (connection != null) {
//             connection.close();
//         }
//     }
// };

// action().catch(error => {
//     console.log('error=%o', error);
// });

