// # Manage Query Parameters in URL

// QPs: url.search v. url.searchParams
// url.search: String that starts with ? and includes all QP (eg. '?objectType=user&username=john')
// url.searchParams: URLSearchParams obj

// Remove All QP from URL String
function removeAllQueryParameters(inputUrl) {
  const url = new URL(inputUrl);
  url.search = '';  // CAUTION: if set this `null` rather than `''`, what will happen?
  return url.toString()
}

// Remove specific QP from URL 
function removeQueryParameter(inputUrl, paramName) {
  const url = new URL(inputUrl);
  url.searchParams.delete(paramName);
  return url.toString();
}

// Add QP to URL (easy)
const url = new URL('https://example.com/api/search?objectType=user');
url.searchParams.append('userRole', 'admin');
url.searchParams.append('userRole', 'user');  // Notice that same QP will be added despite of other value; use set() if you want to change it
url.searchParams.append('name', 'Luke');

// searchParams handles Type change & encoding special chars ('?', '#' etc. -> percent encoding)
// Document for URL Reserved Characters & Percent Encoding: https://www.rfc-editor.org/rfc/rfc3986#section-2.1
const url2 = new URL('https://example.com/api/search?objectType=user');
url2.searchParams.append('role', undefined);
url2.searchParams.append('q', 'admin&user?luke');


// Get a QP from URL
function getQueryParameters(inputUrl) {
  const result = [];
  const url = new URL(inputUrl);
  url.searchParams.forEach((value, key) => {
    result.push({ key, value });
  })
  
  return result;
}