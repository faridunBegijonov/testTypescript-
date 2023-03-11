const num = 1000;
const bonus = 500;
const res = num + bonus;
console.log(res)

interface IUser {
    name: string;
    age: number;
}

const user: IUser = {
    name: 'Faridun',
    age: 16
}

const sayHello = (entety: IUser) => {
    return `${entety.age} hello `
}

const users: IUser[] = [{name: 'Faridun', age: 16}, {name: 'Farukh', age: 26}];
const car: [string, number] = ['Hello', 10];
car.push(20);
console.log(car)

const names: readonly string[] = ['Faridun', 'Farukh'];
// names[0] = 'Shoh';

// const tuples: [number, string, ...boolean[]] = [1, 'Faridun', true, false];
