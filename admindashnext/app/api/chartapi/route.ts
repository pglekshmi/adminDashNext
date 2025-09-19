import cashed from '../db/route';
import sample from '../Models/schema';

export async function GET(request:Request){
    const data = await sample.find();
    console.log(data);
    return Response.json(data)
    
}