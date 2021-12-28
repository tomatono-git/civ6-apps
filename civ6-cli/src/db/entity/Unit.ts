import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, } from 'typeorm';

@Entity({ name: 'unit'})
export class Unit {
    @PrimaryGeneratedColumn()
    readonly id?: number;

    @Column('varchar', { name: 'unit_type', length: 50, nullable: false })
    UnitType?: string;

    @Column('smallint', { name: 'cost', nullable: false })
    Cost?: number;

    @Column('smallint', { name: 'base_moves', nullable: false })
    BaseMoves?: number;

    @Column('smallint', { name: 'base_sight_range', nullable: false })
    BaseSightRange?: number;

    @Column('boolean', { name: 'zone_of_control',nullable: true, default: false })
    ZoneOfControl?: boolean;

    @Column('varchar', { name: 'domain', length: 50, nullable: true })
    Domain?: string;

    @Column('varchar', { name: 'formation_class', length: 50, nullable: true })
    FormationClass?: string;

    @Column('boolean', { name: 'foundCity',nullable: true, default: false })
    FoundCity?: boolean;

    @Column('smallint', { name: 'population_cost', nullable: true })
    PopulationCost?: number;

    @Column('smallint', { name: 'prereq_population', nullable: true })
    PrereqPopulation?: number;

    @Column('varchar', { name: 'advisor_type', length: 50, nullable: true })
    AdvisorType?: string;

    @Column('varchar', { name: 'name', length: 100, nullable: false })
    Name?: string;

    @Column('text', { name: 'description', nullable: true })
    Description?: string;

    @Column('boolean', { name: 'can_capture', nullable: true })
    CanCapture?: boolean;

    @Column('varchar', { name: 'cost_progression_model', length: 50, nullable: true })
    CostProgressionModel?: string;

    @Column('varchar', { name: 'cost_progression_param1', length: 50, nullable: true })
    CostProgressionParam1?: string;

    @Column('varchar', { name: 'purchase_yield', length: 50, nullable: true })
    PurchaseYield?: string;

    @Column('varchar', { name: 'pseudo_yield_type', length: 50, nullable: true })
    PseudoYieldType?: string;

    /** 登録日時 */
    @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
    readonly createdAt?: Date;

    /** 登録者 */
    @Column('varchar', { name: 'create_user', length: 50, nullable: false })
    CreateUser?: string;

    /** 更新日時 */
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
    readonly updatedAt?: Date;

    /** 更新者 */
    @Column('varchar', { name: 'update_user', length: 50, nullable: false })
    UpdateUser?: string;

    /**
     * コンストラクタ
     * @param props プロパティ
     */
    public constructor(props?: Partial<Unit>) {
        Object.assign(this, props ? props : {});
    }
}

