import path from 'path';
import { ConfigReader } from './reader/ConfigReader';
import { XmlReader } from './reader/XmlReader';
import { UnitsXmlParser } from './parser/UnitsXmlParser';

const action = async () => {

    // 設定ファイルを読み込む
    const config = await new ConfigReader().read('config');
    // const configFile = fs.readFileSync('./config/config.yaml', 'utf8');
    // const config = YAML.parse(configFile);

    // TODO debug
    console.log('config=%o', config);

    // インストール先
    const installDir = (config.install_dir as string).replace('\\', '/');
    // Units.xml のパス
    const unitsPath = path.join(installDir, 'Base/Assets/Gameplay/Data/Units.xml');

    // Units.xml を読み込む
    const unitsXml = await new XmlReader().read(unitsPath);
    // Units.xml をパース
    const units = new UnitsXmlParser().parse(unitsXml);

    // // TODO debug
    // console.log('unitsXml.GameInfo?.Units=%o', unitsXml.GameInfo?.Units);

    // // TODO debug
    // // console.log('args1=%o', units.args1);
    // console.log('unitsXml.GameInfo=%o', unitsXml.GameInfo);
    // console.log('unitsXml.GameInfo?.Units=%o', unitsXml.GameInfo?.Units);

    // const units = unitsXml.GameInfo?.Units;
    // if (units.length > 0)
    // {
    //     const unitRows = units[0].Row as any[];
    //     for (const row of unitRows) {
    //         const unit = row.$;
    //         console.log('unit: %s=%o', unit.UnitType, unit);
    //     }
    // }

};

action().catch(error => {
    console.log('error=%o', error);
});

