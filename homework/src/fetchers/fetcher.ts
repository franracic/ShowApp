export async function fetcher<T>(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<T> {
  try {
    const authHeaderString = localStorage.getItem("auth-header");
    const authHeader = authHeaderString ? JSON.parse(authHeaderString) : null;

    const headers = {
      ...init?.headers,
      uid: authHeader.uid || "",
      client: authHeader.client || "",
      "access-token": authHeader.token || "",
    };

    const response = await fetch(input, {
      ...init,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Response status: ${error}`);
  }
}
