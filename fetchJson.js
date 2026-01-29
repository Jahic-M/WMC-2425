// Aufgabe: Fetch Wrapper (JSON holen + sinnvolle Fehler)
// Idee: fetch() liefert immer eine Response. Bei 404 kommt kein Throw,
// daher prüfen wir response.ok und werfen selbst.

export async function fetchJson(url, options = {}) {
  const res = await fetch(url, options);

  // Statuscodes: ok bedeutet 200-299
  if (!res.ok) {
    // möglichst hilfreiche Fehlermeldung
    const text = await safeReadText(res);
    throw new Error(`HTTP ${res.status} ${res.statusText} bei ${url}${text ? " | " + text : ""}`);
  }

  // Manche Endpunkte liefern kein JSON -> versuchen, sonst Text
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return await res.json();
  }
  return await res.text();
}

async function safeReadText(res) {
  try {
    return await res.text();
  } catch {
    return "";
  }
}
