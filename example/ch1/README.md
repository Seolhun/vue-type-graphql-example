## Type

```bash
$ mkdir example
$ cd example
$ vim greeter.ts
```

```javascript
function greeter(person: string) {
    return "Hello, " + person;
}

var user = [0, 1, 2];

document.body.innerHTML = greeter(user);a
```
```bash
$ tsc greeter.ts

error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

1. Must be matched Type.