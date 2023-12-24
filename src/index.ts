import { getSets } from './features/getSets'
import { greet } from './features/greeting'

const exampleUser = {
    name: "Sample User"
}

console.log(greet(exampleUser.name))

console.log(getSets())