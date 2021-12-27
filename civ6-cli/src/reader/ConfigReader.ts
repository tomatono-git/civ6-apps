import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

export class ConfigReader {
 
    public async read(name: string) {
        const configPath = path.join('./config', `${name}.yaml`);
        return await this.readFromPath(configPath);
    }
 
    public async readFromPath(configPath: string) {
        const configFile = await fs.readFileSync(configPath, 'utf8')
        const config = YAML.parse(configFile);
        return config;
    }
}