export interface CounterState {
    counter: number;
    previous: number;
    changes: number;

}
export type CounterAction = { type: 'increaseBy', payload: { value: number} }|
                        { type: 'reset',}