import path from 'path';

import { ConfigManager } from 'io/config/ConfigManager';
import { XmlReader } from 'io/reader/XmlReader';
import { UnitsXmlParser } from 'io/parser/UnitsXmlParser';

import { UnitRepository } from 'db/repository/UnitRepository';

export class ImportCli {

    public async importUnit() {
        // コマンドライン引数
        const args = process.argv;
        // TODO debug
        console.log('コマンドライン引数: %o', args);

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
    }
}

