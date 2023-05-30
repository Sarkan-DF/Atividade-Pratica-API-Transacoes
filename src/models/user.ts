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

  public set name(name: string) {
    this._name = name;
  }

  public get cpf(): string {
    return this._cpf;
  }

  public set cpf(cpf: string) {
    this._cpf = cpf;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get age(): number {
    return this._age;
  }

  public set age(age: number) {
    this._age = age;
  }

  public toJson() {
    return {
      name: this._name,
      cpf: this._cpf,
      email: this._email,
      age: this._age,
      id: this.id,
    };
  }

  public get transactions(): Transactions[] {
    return this._transactions;
  }
}
