export async function onRequest(context) {
  const response = await context.next();
  const url = new URL(context.request.url);
  const path = url.pathname;

  if (path.endsWith('.js')) {
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'application/javascript; charset=utf-8');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  if (path.endsWith('.css')) {
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'text/css; charset=utf-8');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  return response;
}
