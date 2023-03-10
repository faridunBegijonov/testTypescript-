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