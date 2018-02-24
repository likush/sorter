class Sorter {
    constructor() {
        this.arr = []
        this.comparator = (a, b) => a - b
    }

    add(element) {
        this.arr.push(element)
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        indices.sort((a, b) => a - b);
        let toSort = [];
        for (let i = 0; i < indices.length; i++) {
            toSort.push(this.arr[indices[i]])
        }

        toSort.sort(this.comparator)

        for (let i = 0; i < indices.length; i++) {
            this.arr[indices[i]] = toSort[i]
        }
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction
    }
}

module.exports = Sorter;