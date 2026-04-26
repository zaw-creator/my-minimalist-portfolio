export async function GET() {
  try {
    const response = await fetch("https://zenquotes.io/api/random", {
      next: { revalidate: 0 },
    });
    const data = await response.json();
    return Response.json(data);
  } catch {
    return Response.json([{ q: "Keep going.", a: "Unknown" }], { status: 200 });
  }
}
