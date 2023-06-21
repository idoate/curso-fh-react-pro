export type CounterAction = { type: 'increaseBy', payload: { value: number} }|
                        { type: 'reset',}


// export const doReset= (): CounterAction => {
//     return {
//         type: 'reset'
//     }
// }

export const doReset= (): CounterAction => ({ //Esto significa que el return es un objeto
        type: 'reset'
})