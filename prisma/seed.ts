import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: 'c2c41fac-18a2-4b7f-8a7d-bd23beafce5b',
            title: 'United Summits',
            slug: 'united-summits',
            details: 'um evento para devs apaixonados por codigo.',
            maximumAttendees: 120,
        }
    })
}

    seed().then(() => {
        console.log('Database seeded!')
        prisma.$disconnect()
    })
