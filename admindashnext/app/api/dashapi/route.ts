import mongoose from 'mongoose';
import sample from '../Models/schema';

mongoose.connect("mongodb://localhost:27017/demoDB").then(() => {
    console.log(" MongoDB connected successfully to demoDB");})
    .catch((error) => {
        console.error(" MongoDB connection failed:", error);})


const data = [
    { id: 1, lastName: 'Snow', firstName: 'Jon',salary:46000, age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei',salary:35000, age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime',salary:32000, age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya',salary:40000, age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',salary:37000, age: null },
    { id: 6, lastName: 'Melisandre', firstName: 'Louis', salary:42000,age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara',salary:26000, age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini',salary:30000, age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey',salary:49000, age: 65 }
];

export async function POST(request:Request){
    await sample.insertMany(data);
    const userData = await sample.find()
    return Response.json({message:"Hello World",userData})
}

export async function GET(request:Request){
    const data = await sample.find()
    return Response.json(data)
}

export async function PUT(request:Request){
    const updateData = await request.json();

    await sample.findOneAndUpdate({id:updateData.id},
        {$set:{lastName:updateData.lastName,firstName:updateData.firstName,salary:updateData.salary,age:updateData.age}},
        {new:true}
    )

    const updata = await sample.findOne({id:updateData.id})

    return Response.json({msg:"Hello World",updata})
}