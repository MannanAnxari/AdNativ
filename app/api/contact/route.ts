import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const data = await request.json()

        // Validate required fields
        if (!data.name || !data.email || !data.message) {
            return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
        }

        // Forward the request to the PHP API
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://eliteblue.net"}/api/send-email.php`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        // Get the response from the PHP API
        const result = await response.json()

        // Return the response
        return NextResponse.json(result, { status: response.status })
    } catch (error) {
        console.error("Error in contact API route:", error)
        return NextResponse.json({ success: false, message: "Server error, please try again later" }, { status: 500 })
    }
}
