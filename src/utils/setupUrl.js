function setupUrl(urlStr, params, page) {
  const url = new URL(urlStr);

  if (params) {
    Object.values(params).forEach((p) => { url.searchParams.append(...p); });
  }

  if (page) {
    url.searchParams.append('page', page);
    url.searchParams.append('per_page', 100);
    url.searchParams.append('order_by', 'popular');
  }

  return url.toString();
}

export default setupUrl;
