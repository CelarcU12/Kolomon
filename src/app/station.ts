import { PositionSet } from './position-set';

export class Station{
    id: number;
    position_set: Array<PositionSet>;
    name: string;


    constructor(values: Object = {}) {
Object.assign(this, values);
    }
}