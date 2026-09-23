/** Replaces the {email} token in hrefs stored in portfolio.json. */
export default function resolveHref(href, email) {
  return href.replace("{email}", email);
}
