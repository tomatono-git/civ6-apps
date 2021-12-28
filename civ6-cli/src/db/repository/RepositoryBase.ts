import { Connection, createConnection, EntityTarget, getRepository, ObjectLiteral, Repository } from 'typeorm';

export class RepositoryBase<Entity extends ObjectLiteral> {

    private repository: Repository<Entity>;

    constructor(entityClass: EntityTarget<Entity>, connectionName?: string) {
        this.repository = getRepository(entityClass, connectionName);
    }

    // constructor(instance: Repository<Entity>) {
    //     this.repository = instance;
    //     this.repository = getRepository(Entity);
    // }

    public async withConnection(action: (repository: Repository<Entity>) => Promise<any>) {
        let connection: Connection | null = null;
        try {
            // DBに接続
            connection = await createConnection();

            // const userRepository = this.getRepository(Entity);
            // ユニットをDBに登録
            // return await this.repository.save(entities);
            return action(this.repository);
        } finally {
            if (connection != null) {
                // DB接続を閉じる
                connection.close();
            }
        }

    }

    // save<T extends DeepPartial<Entity>>(entity: T, options?: SaveOptions): Promise<T & Entity>;

    // /**
    //  * 登録
    //  * @param units ユニットのリスト
    //  */
    //  public async saveWithConnection<T extends DeepPartial<Entity>>(entities : (T & Entity)[]) {
    //     let connection: Connection | null = null;
    //     try {
    //         // DBに接続
    //         connection = await createConnection();

    //         // const userRepository = this.getRepository(Entity);
    //         // ユニットをDBに登録
    //         return await this.repository.save(entities);
    //     } finally {
    //         if (connection != null) {
    //             // DB接続を閉じる
    //             connection.close();
    //         }
    //     }

    // }

    // export declare function getRepository<Entity>(entityClass: EntityTarget<Entity>, connectionName?: string): Repository<Entity>;

    // private getRepository<Entity>(entityClass: EntityTarget<Entity>, connectionName?: string): Repository<Entity> {
    //     return getRepository(entityClass, connectionName);
    // }

}