import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const abhishek = await prisma.user.upsert({
        where: { number: '1111111111' },
        update: {},
        create: {
            number: '1111111111',
            password: await bcrypt.hash('abhi@123', 10),
            name: 'Abhishek',
            Balance : {
                create : {
                    amount : 20000,
                    locked : 0
                }
            },
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: 'Success',
                    amount: 200000, 
                    token: "ab_1", 
                    provider: 'HDFC Bank',
                },
            },
        },
    });
                                      
    const priyanshu = await prisma.user.upsert({  // upsert means create or update
        where: { number: '2222222222' }, 
        update: {},
        create: {
            number: '2222222222',
            password: await bcrypt.hash('priyanshu@123', 10),
            name: 'Priyanshu',
            Balance : {
                create : {
                    amount : 20000,
                    locked : 0
                }
            },
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: 'Success',
                    amount: 200000, 
                    token: "ab_2", 
                    provider: 'HDFC Bank',
                },
            },
        },
    });

    console.log({ abhishek, priyanshu });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('Seeding Error:', e.message, e.stack);
        await prisma.$disconnect();
        process.exit(1);
    });
