export function getPathname(path: string): string {
  const splitpath = path.split("/");
  const destination = splitpath[2];
  const capitalise = destination.charAt(0).toUpperCase();

  return capitalise + destination.substring(1);
}
