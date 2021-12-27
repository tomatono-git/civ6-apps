import {MigrationInterface, QueryRunner} from "typeorm";

export class Civ6ModMigration1640603055940 implements MigrationInterface {
    name = 'Civ6ModMigration1640603055940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "unit" ("id" SERIAL NOT NULL, "unit_type" character varying(50) NOT NULL, "cost" smallint NOT NULL, "base_moves" smallint NOT NULL, "base_sight_range" smallint NOT NULL, "zone_of_control" boolean DEFAULT false, "domain" character varying(50), "formation_class" character varying(50), "foundCity" boolean DEFAULT false, "population_cost" smallint, "prereq_population" smallint, "advisor_type" character varying(50), "name" character varying(100) NOT NULL, "description" text, "can_capture" boolean, "cost_progression_model" character varying(50), "cost_progression_param1" character varying(50), "purchase_yield" character varying(50), "pseudo_yield_type" character varying(50), "created_at" TIMESTAMP(0) NOT NULL DEFAULT now(), "updated_at" TIMESTAMP(0) NOT NULL DEFAULT now(), CONSTRAINT "PK_4252c4be609041e559f0c80f58a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "unit"`);
    }

}
