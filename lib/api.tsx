"use server";

export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
    const baseUrl = process.env.API_DOMAIN_NAME;

    const headers: Record<string, string> = {
        ...(options.headers as Record<string, string>),
    };

    headers["Content-Type"] = "application/json";
    
    try {
        const res = await fetch(`${baseUrl}${endpoint}`, {
            ...options,
            headers,
            cache: "no-store",
        });
        
        if (!res.ok) {
            const message = await res.text();
            console.error("API ERROR:", endpoint, res.status, message);
            throw new Error(`API Error ${res.status}`);
        }
        
        return res.json() as Promise<T>;
    } catch (err) {
        console.error("API FETCH FAILED:", endpoint, err);
        return null;
    }
    
}