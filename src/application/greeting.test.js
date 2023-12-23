import {greet} from './greeting'

test('Users are greeted by their name', () => {
    expect(greet('User')).toBe('Hello User!');
})