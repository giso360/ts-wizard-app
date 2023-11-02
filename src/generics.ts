interface Hero {
  name: string;
  superPower: string;
}

const h1: Hero = {
  name: "Hulk",
  superPower: "strong",
};
const h2: Hero = {
  name: "Batman",
  superPower: "rich",
};

const generics = () => {
  function removeLastElement<T>(array: T[]): T[] {
    return array.slice(0, array.length - 1);
  }

  let heroes: Hero[] = [h1, h2];
  console.log(JSON.stringify(heroes));
  let result = removeLastElement<Hero>(heroes);
  console.log(JSON.stringify(result));

  let booleans: boolean[] = [true, false, true];
  console.log(booleans);
  let result1 = removeLastElement<boolean>(booleans);
  console.log(result1);
};
