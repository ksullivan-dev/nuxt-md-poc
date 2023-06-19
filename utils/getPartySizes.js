export const getPartySizes = () =>
  Array.from({ length: 10 }).map((_, idx) => {
    const id = idx + 1;
    return {
      id,
      value: id,
      label: idx === 0 ? '1 person' : `${id} people`,
    };
  });
