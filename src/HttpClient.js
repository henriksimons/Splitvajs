export const post = (url, item) => {
  const httpPostRequestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  };

  fetch(url, httpPostRequestOptions).then(
    (response) => response.json()
  );
};
