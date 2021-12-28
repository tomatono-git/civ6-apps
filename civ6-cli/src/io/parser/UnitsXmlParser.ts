import { Unit } from 'db/entity/Unit';

export class UnitsXmlParser {

    public parse(unitsXml: any): Array<Unit> {
        const unitList: Array<Unit> = [];

        // TODO debug
        // console.log('args1=%o', units.args1);
        console.log('unitsXml.GameInfo=%o', unitsXml.GameInfo);
        console.log('unitsXml.GameInfo?.Units=%o', unitsXml.GameInfo?.Units);

        const units = unitsXml.GameInfo?.Units;
        if (units.length > 0)
        {
            const unitRows = units[0].Row as any[];
            for (const row of unitRows) {
                // const unitRow = row.$;
                const unit = new Unit(row.$);

                console.log('unit: %s=%o', unit.UnitType, unit);
            }
        }

        return unitList;
    }
}