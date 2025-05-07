function formatString(input: string, toUpper?: boolean): string{
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item => item.rating >= 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((a, c) => a.concat(c), []);
}


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


function processValue(value: string | number): number{
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0) return null;

    return products.reduce((max, current) =>
    current.price > max.price ? current : max)
}


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
