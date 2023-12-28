export const executeDeleteRequest = (url) => {
  const httpRequestOptions = {
    method: "DELETE",
  };
  fetch(url, httpRequestOptions);
}  