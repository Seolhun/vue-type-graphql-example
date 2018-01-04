/// <reference path="BuilderPattern.ts" />

namespace BuilderPattern {
  export namespace Demo {
    export function show(): void {
      const user: BuilderPattern.User = new BuilderPattern.UserBuilder("Jancsi")
        .setAge(12)
        .setPhone("0123456789")
        .setAddress("asdf")
        .build();

      console.log('user.$name: ' + user.Name)
      console.log('user.$age: ' + user.Age)
      console.log('user.$phone: ' + user.Phone)
      console.log('user.$address: ' + user.Address)
    }
  }
}
