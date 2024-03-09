/** IMO this should work in all of:
 * * `deno compile`
 * * `deno install`
 * * `deno run`
 */
async function main() {
  const sadi = await import("./_src/sadi.ts")
  console.log(sadi.info)
}

if (import.meta.main) {
  await main()
}
