export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export function addTodo(e) {
    return {
        type: ADD_TODO,
        content: e
    }
}

export function removeTodo(i) {
    return {
        type: REMOVE_TODO,
        index: i
    }
}

