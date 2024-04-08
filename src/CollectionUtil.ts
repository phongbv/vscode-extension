function groupByMultilevel<T>(array: T[], keys: string[]) {
    const result = array.reduce((groups: { [key: string]: T[] }, item) => {
        let groupKey = item as any;
        keys.forEach((key) => {
            groupKey = groupKey[key];
        });
        const group = groupKey.toString();
        groups[group] = [...(groups[group] || []), item];
        return groups;
    }, {});
    return Object.keys(result).map(key => ({
        key: key,
        values: result[key]
    }));
}

export default groupByMultilevel;