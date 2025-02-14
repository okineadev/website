import fs from 'node:fs'

/**
 * The CNAME value retrieved from the CNAME file and trimmed of whitespace.
 * This constant is used to store the canonical domain name for the website.
 */
const CNAME = fs.readFileSync('./CNAME', 'utf-8').trim()

export default CNAME
