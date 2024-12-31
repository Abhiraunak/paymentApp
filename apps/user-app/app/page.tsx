import { PrismaClient } from "../../../packages/db";
const client = new PrismaClient();

export default function Home() {
  return (
    <div className="text-blue-800">
     <h1>Rebuilt this togther</h1> 
    </div>
  );
}
