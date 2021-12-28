// import { Connection, createConnection, getRepository } from 'typeorm';
// import { createConnection } from "typeorm";

import { Unit } from "db/entity/Unit";
import { RepositoryBase } from './RepositoryBase';

export class UnitRepository extends RepositoryBase<Unit> {

    constructor() {
        super(Unit);
    }

    /**
     * 登録
     * @param units ユニットのリスト
     */
    public async save(units: Array<Unit>): Promise<Unit[]> {
        return await this.withConnection(async repos => {
            return await repos.save(units);
        })
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