const solution = (orders, course) => {
    const arr = [];

    const combination = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) {
            return arr.map((it) => [it]);
        }

        arr.forEach((fixed, index) => {
            const rest = arr.slice(index + 1);
            const combinations = combination(rest, selectNumber - 1);
            const attached = combinations.map((el) => [
                fixed, ...el
            ]);
            results.push(...attached);
        });

        return results;
    }
    
    course.forEach((i) => {
        const menusCount = {};

        orders.forEach((order) => {
            combination(order.split(''), i)
                .map((it) => it.sort().join(''))
                .forEach((menu) => {
                    menusCount[menu] = (menusCount[menu] || 0) + 1;
                });
        });

        const maxCount = Math.max(...Object.values(menusCount));
        if (maxCount < 2) {
            return;
        }

        const result = Object
            .entries(menusCount)
            .filter(([key, value]) => value === maxCount)
            .map(([key]) => key);

        arr.push(...result);
    })

    return [...arr].sort();
};