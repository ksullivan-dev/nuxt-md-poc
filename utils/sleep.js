export const sleep = async (time = 0) =>
  await new Promise((res) => setTimeout(res, time));
