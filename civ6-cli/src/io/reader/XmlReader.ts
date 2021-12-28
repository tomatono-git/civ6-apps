import fs from 'fs';
import { Parser } from 'xml2js';

export class XmlReader {

    public async read(filePath: string): Promise<any> {
        const exists = await fs.existsSync(filePath);
        if (!exists) {
            const errorMesage = `XmlReader#read(): File not found. filePath=${filePath}`
            console.log(errorMesage);
            throw new Error(errorMesage);
        }

        const unitsFile = fs.readFileSync(filePath);
        const parser = new Parser();
        // const units = parser.parseStringPromise(unitsFile);

        // // TODO debug
        // console.log('units=%o', units);
        const unitsXml = await parser.parseStringPromise(unitsFile);

        return unitsXml;
    }
}
