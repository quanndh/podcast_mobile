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

  convertColor: (color: string, percent: number) => {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    return `rgba(${R}, ${G}, ${B}, ${percent})`;
  },
};
