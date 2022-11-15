export const Helpers = {
  groupTrending: (data: Record<string, string>[]) => {
    let group: Record<string, string>[][] = [];
    for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= 3 && i % 3 === 0) {
        j++;
      }
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }
    return group;
  },
};
