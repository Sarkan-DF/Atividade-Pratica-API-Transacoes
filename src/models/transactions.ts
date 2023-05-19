import { v4 as createUuid2 } from "uuid";

enum Type {
  Debit = "Debito",
  Credit = "Credito",
}

export class Transactions {
  public id: string;
  constructor(
    private _title: string,
    private _value: number,
    private _type: Type
  ) {
    this.id = createUuid2();
  }

  public get title(): string {
    return this._title;
  }

  public get value(): number {
    return this._value;
  }

  public get type(): string {
    return this._type;
  }
}
