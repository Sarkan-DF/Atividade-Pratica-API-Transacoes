import { v4 as createUuid2 } from "uuid";
import { Transactions } from "./transactions";

export class User {
  public id: string;
  private _transactions: Transactions[];
  constructor(
    private _name: string,
    private _cpf: string,
    private _email: string,
    private _age: number
  ) {
    this.id = createUuid2();
    this._transactions = [];
  }

  public get name(): string {
    return this._name;
  }

  public get cpf(): string {
    return this._cpf;
  }

  public get email(): string {
    return this._email;
  }

  public get age(): number {
    return this._age;
  }

  public get transactions(): Transactions[] {
    return this._transactions;
  }
}
