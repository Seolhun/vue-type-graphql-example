namespace BuilderPattern {
  export class UserBuilder {
    private name: string;
    private age: number;
    private phone: string;
    private address: string;

    constructor(name: string) {
      this.name = name;
    }

    public get Name(): string {
      return this.name;
    }

    public setName(value: string): UserBuilder {
      this.name = value;
      return this;
    }

    public get Age(): number {
      return this.age;
    }

    public setAge(value: number): UserBuilder {
      this.age = value;
      return this;
    }

    public get Phone(): string {
      return this.phone;
    }

    public setPhone(value: string): UserBuilder {
      this.phone = value;
      return this;
    }

    public get Address(): string {
      return this.address;
    }

    public setAddress(value: string): UserBuilder {
      this.address = value;
      return this;
    }

    build(): User {
      return new User(this);
    }
  }

  export class User {
    private name: string;
    private age: number;
    private phone: string;
    private address: string;

    constructor(builder: UserBuilder) {
      this.name = builder.$name;
      this.age = builder.$age;
      this.phone = builder.$phone;
      this.address = builder.$address;
    }

    public get $name(): string {
      return this.name;
    }

    public get $age(): number {
      return this.age;
    }

    public get $phone(): string {
      return this.phone;
    }

    public get $address(): string {
      return this.address;
    }
  }
}
