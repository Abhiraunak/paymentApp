import db from "@repo/db/client";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "123123123" },
                password: { label: "Password", type: "password" }
            },
            
            async authorize( credentials : any){
              const hashedPassword = await bcrypt.hash(credentials.password, 10);
              const existingUser = await 
            }
        })
    ]
}