import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { Parser } from 'xml2js';

// 設定ファイルを読み込む
const configFile = fs.readFileSync('./config/config.yaml', 'utf8')
const config = YAML.parse(configFile);

// TODO debug
console.log('config=%o', config);

const action = async () => {
    const installDir = (config.install_dir as string).replace('\\', '/');
    const unitsPath = path.join(installDir, 'Base/Assets/Gameplay/Data/Units.xml');
    const exists = await fs.existsSync(unitsPath);
    if (!exists)
    {
        console.log('ユニットの定義ファイルがみつかりません。unitsPath=%s', unitsPath);
        return;
    }
    const unitsFile = fs.readFileSync(unitsPath);
    const parser = new Parser();
    // const units = parser.parseStringPromise(unitsFile);

    // // TODO debug
    // console.log('units=%o', units);
    const unitsXml = await parser.parseStringPromise(unitsFile);

    // TODO debug
    // console.log('args1=%o', units.args1);
    console.log('unitsXml.GameInfo=%o', unitsXml.GameInfo);
    console.log('unitsXml.GameInfo?.Units=%o', unitsXml.GameInfo?.Units);

    const units = unitsXml.GameInfo?.Units;
    if (units.length > 0)
    {
        const unitRows = units[0].Row as any[];
        for (const row of unitRows) {
            const unit = row.$;
            console.log('unit: %s=%o', unit.UnitType, unit);
        }
    }

};

action().catch(error => {
    console.log('error=%o', error);
});

