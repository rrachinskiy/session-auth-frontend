type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const sendRequest = async (url = '', data = {}, method: RequestMethod = 'POST') => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'error', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: data ? JSON.stringify(data) : undefined, // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
};
