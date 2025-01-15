import { db, users } from '../../db'

export async function GET() {
    const usersResult = await db.select().from(users)

    return Response.json({
        users: usersResult
    })
}

export async function POST(request: Request) {
    const formData = await request.json()

    console.log(formData)

    const result = await db.insert(users).values({
        name: formData.name,
        age: formData.age,
        email: formData.email
    }).returning()

    Response.json({
        result: result
    })
}