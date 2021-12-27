import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createDevs1640538842327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
              {
                name: 'devs',
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
                    type: 'int',
                    isNullable: false,
                  },
                  {
                    name: 'nome',
                    type: 'varchar',
                  },
                  {
                    name: 'sexo',
                    type: 'char',
                  },
                  {
                    name: 'datanascimento',
                    type: 'date',
                  },
                  {
                    name: 'idade',
                    type: 'int',
                  },
                  {
                    name: 'hobby',
                    type: 'varchar',
                  },
                ],
              },
            ),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('devs');
    }

}
