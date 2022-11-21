export const Helpers = {
  groupArr: (data: Record<string, string>[], n: number = 3) => {
    let group: Record<string, string>[][] = [];
    for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) {
        j++;
      }
      group[j] = group[j] || [];
      group[j].push(data[i]);
    }
    return group;
  },
};
