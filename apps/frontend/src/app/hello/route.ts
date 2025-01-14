export async function GET() {
    return Response.json({
        message: `${(Math.random() * 10000).toFixed(0)} People have this item in their cart!`
    })
}