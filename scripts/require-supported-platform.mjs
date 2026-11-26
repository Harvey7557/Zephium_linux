const SUPPORTED_PLATFORMS = new Set(["darwin", "win32", "linux"]);
if (!SUPPORTED_PLATFORMS.has(process.platform)) {
  console.error(`Zephium is not supported on platform: ${process.platform}.`);
  process.exit(1);
}
