function setupUrl(urlStr, params) {
  const url = new URL(urlStr);

  if (params) {
    Object.entries(params).forEach((p) => { url.searchParams.append(...p); });
  }

  return url.toString();
}

export default setupUrl;
