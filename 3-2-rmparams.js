function removeAllQueryParameters(inputUrl) {
  const url = new URL(inputUrl);
  url.search = '';
  return url.toString();
}