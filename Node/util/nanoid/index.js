exports.getNanoid = async () => {
  const { nanoid } = await import("nanoid");
  return new Promise((resolve, reject) => resolve(nanoid()));
};
