export async function retry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 3000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }

    console.log(
      `⚠️ Retry attempt... Remaining: ${retries}`
    );

    await new Promise((resolve) =>
      setTimeout(resolve, delay)
    );

    return retry(fn, retries - 1, delay);
  }
}