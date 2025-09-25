import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);

    const client = await clientPromise;
    const db = client.db("QuickLinks");
    const collection = db.collection("Feedback");

    const result = await collection.insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        success: true,
        error: false,
        message: "Feedback submitted Successfully",
        id: result.insertedId,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: true,
        message: "Failed to submit feedback",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
