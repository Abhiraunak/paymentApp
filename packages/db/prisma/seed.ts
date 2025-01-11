import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const abhishek = await prisma.user.upsert({
        where: { number: '1111111111' },
        update: {},
        create: {
            number: '1111111111',
            password: 'abhi@123',
            name: 'Abhishek',
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: 'Success',
                    amount: 200000, 
                    token: 123, 
                    provider: 'HDFC Bank',
                },
            },
        },
    });

    const priyanshu = await prisma.user.upsert({
        where: { number: '2222222222' }, 
        update: {},
        create: {
            number: '2222222222',
            password: 'priyansh@123',
            name: 'Priyanshu',
            OnRampTransaction: {
                create: {
                    startTime: new Date(),
                    status: 'Success',
                    amount: 200000, 
                    token: 124, 
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
