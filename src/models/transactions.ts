import { v4 as createUuid2 } from "uuid";

export enum TypeTransaction {
  Debit = "Debito",
  Credit = "Credito",
}

export class Transactions {
  public id: string;
  constructor(
    private _title: string,
    private _value: number,
    private _type: TypeTransaction
  ) {
    this.id = createUuid2();
  }

  public get title(): string {
    return this._title;
  }

  public get value(): number {
    return this._value;
  }

  public get type(): TypeTransaction {
    return this._type;
  }

  public set title(title: string) {
    this._title = title;
  }

  public set value(value: number) {
    this._value = value;
  }

  public set type(type: TypeTransaction) {
    this._type = type;
  }

  public toJsonT() {
    return {
      title: this._title,
      value: this._value,
      type: this._type,
    };
  }
}
