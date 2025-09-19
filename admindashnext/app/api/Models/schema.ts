import {Schema} from 'mongoose';
import {model,models}  from 'mongoose';
import { unique } from 'next/dist/build/utils';

const demo=new Schema({
    id:{type:Number,
        required:true,
        unique:true
    },
    lastName:{type:String,required:true},
    firstName:{type:String,required:true},
    salary:{type:Number,required:true},
    age:Number
});

const sample=models.sample || model('sample', demo)
export default sample;