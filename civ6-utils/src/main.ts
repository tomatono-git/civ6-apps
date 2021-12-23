import fs from 'fs';
import YAML from 'yaml';

// 設定ファイルを読み込む
const file = fs.readFileSync('./config/config.yaml', 'utf8')
const config = YAML.parse(file);

// TODO debug
console.log('config=%o', config);
