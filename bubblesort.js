const express = require('express');
const app = express();
const PORT = 3000;

class ArrayStatistics {
    constructor(values) {
        this.values = values;
        this.sortedValues = this.sortArray([...this.values]);
    }

    sortArray(arr) {
        const n = arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }

    calculateMedian() {
        const n = this.sortedValues.length;
        const mid = Math.floor(n / 2);
        return n % 2 === 0
            ? (this.sortedValues[mid - 1] + this.sortedValues[mid]) / 2
            : this.sortedValues[mid];
    }

    findLargest() {
        return this.sortedValues[this.sortedValues.length - 1];
    }
}

class StatisticsAnalyzer {
    constructor(values) {
        this.arrayStats = new ArrayStatistics(values);
    }

    showStatistics() {
        const median = this.arrayStats.calculateMedian();
        const largest = this.arrayStats.findLargest();
        console.log(`Sorted Values: ${this.arrayStats.sortedValues}`);
        console.log(`Median: ${median}`);
        console.log(`Largest Value: ${largest}`);
    }
}

app.listen(PORT, () => {
    const numbers = [64, 7, 22, 83, 37, 90];
    const analyzer = new StatisticsAnalyzer(numbers);
    analyzer.showStatistics();
});
