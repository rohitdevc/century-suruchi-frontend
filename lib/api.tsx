"use server";

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const baseUrl = process.env.API_DOMAIN_NAME;

    try {
        const res = await fetch(`${baseUrl}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Connection: "close",
            ...options.headers,
        },
        cache: "no-store",
        });

        if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
        }

        return await res.json() as Promise<T>;
    } catch (error) {
        console.error(`Fetch failed for ${endpoint}:`, error);
        throw error;
    }
}