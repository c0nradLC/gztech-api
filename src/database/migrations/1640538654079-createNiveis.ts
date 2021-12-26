import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createNiveis1640539654079 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
              {
                name: 'niveis',
                columns: [
                  {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                  },
                  {
                    name: 'nivel',
                    type: 'varchar',
                  }
                ],
              },
            ),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('niveis');
    }

}
