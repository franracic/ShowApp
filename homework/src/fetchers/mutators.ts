export async function mutator<T>(url: string, { arg }: { arg: T }) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    const error = data.errors
      ? data.errors.join(", ")
      : `Error mutating data on ${url}`;
    throw new Error(error);
  }

  const authHeaders = {
    client: response.headers.get("client"),
    uid: response.headers.get("uid"),
    token: response.headers.get("access-token"),
  };

  return {
    data,
    authHeaders,
  };
}
