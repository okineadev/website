/**
 * The CNAME value retrieved from the CNAME file and trimmed of whitespace.
 * This constant is used to store the canonical domain name for the website.
 */
const CNAME = (await Bun.file('./CNAME').text()).trim()

export default CNAME
