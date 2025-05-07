function formatString(input: string, toUpper?: boolean): string{
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

// const result = formatString("ratul");
// console.log(result);


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item => item.rating >= 4);
}

// const books = [
//     {title: "book 0", rating: 5},
//     {title: "book 9", rating: 1},
//     {title: "book 8", rating: 2},
//     {title: "book 7", rating: 4},
//     {title: "book 6", rating: 3.4},
// ]

// const booksResult = filterByRating(books);
// console.log(booksResult);

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((a, c) => a.concat(c), []);
}

// const result = concatenateArrays(["1", "2", "3"], ["4", "5"])
// console.log(result);

class Vehicle {
    private _make: string;
    private _year: number;

    constructor(make: string, year: number) {
        this._make = make;
        this._year = year;
    }

    getInfo(): string {
        return `make: ${this._make} year: ${this._year}`;
    }
}

class Car extends Vehicle {
    private _model: string;

    constructor(make : string, year: number, model: string) {
        super(make, year);
        this._model = model;
    }

    getModel(): string{
        return `model: ${this._model};`
    }
}

// const myCar = new Car("BMW", 2010, "series-five")
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

function processValue(value: string | number): number{
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}


// console.log(processValue("ratul"));
// console.log(processValue(83));

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0) return null;

    return products.reduce((max, current) =>
    current.price > max.price ? current : max)
}

// const products = [
//     {name: "food", price: 34},
//     {name: "tea", price: 343},
//     {name: "egg", price: 43},
// ]

// const expensiveProduct = getMostExpensiveProduct(products);
// console.log(expensiveProduct);

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "WeekDay";
}

// const sunday = getDayType(Day.Sunday);
// console.log(sunday);

async function squareAsync(n: number): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject("the number you have entered is negative")
            } else {
                resolve(n * n);
            }
        }, 1000);
    });
}

// squareAsync(43).then(console.log);
// squareAsync(-31).catch(console.error);