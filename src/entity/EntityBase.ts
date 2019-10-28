import { IEntityBase } from "./IEntityBase";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export abstract class EntityBase<T> implements IEntityBase {
  constructor();
  constructor(entity: Partial<T>);
  constructor(entity?: any) {
    if (!entity) return;

    for (const key in entity) this[key] = entity[key];
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "datetime", nullable: true })
  dateModified: Date;
}
