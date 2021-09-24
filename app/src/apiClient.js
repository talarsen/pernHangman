export const getPlayers = () => _get("/api/scoreboard");

export const addPlayer = (name) => _post("/api/scoreboard", { name });

const _get = async (url) => (await fetch(url)).json();

export const editPlayer = (player) => _put("/api/scoreboard", player);

const _put = async (url, body) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};
