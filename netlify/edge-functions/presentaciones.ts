export default async function handler(request: Request, context: { next: () => Promise<Response>; rewrite: (path: string) => Promise<Response> }) {
  const { pathname } = new URL(request.url);
  const match = pathname.match(/^\/presentaciones\/([^/.]+)$/);
  if (!match) return context.next();
  return context.rewrite(`/presentaciones/${match[1]}.html`);
}
