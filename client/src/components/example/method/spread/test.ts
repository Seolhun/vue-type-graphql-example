class Spread {
  items: any[];

  constructor() {
    this.items = [
      {
        id: 1,
        name: 'seolhun1',
      },
      {
        id: 2,
        name: 'seolhun2',
      },
      {
        id: 3,
        name: 'seolhun3',
      },
    ];
  }

  for() {
    this.items.forEach((item) => {
      console.log(item);
    });
  }

  spread() {
    console.log(...this.items);
  }

  run() {
    this.for();
    this.spread();
  }
}

export default Spread;
