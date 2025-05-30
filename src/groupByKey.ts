type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    if (result.hasOwnProperty(item[key] as string)) {
      result[item[key] as string].push(item);
    } else {
      result[item[key] as string] = [item];
    }
  }

  return result;
}
