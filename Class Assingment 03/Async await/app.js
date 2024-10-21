//Implement a program to perform simultaneous execution of functions using async await.

// Simulating asynchronous functions

// Simulating asynchronous functions
const fetchData1 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data coming from fetchData 1....");
        }, 2000); // Simulated delay of 2 seconds
    });
};

const fetchData2 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data coming from fetchData 2....");
        }, 1000);
    });
};

const fetchData3 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data coming from fetchData 3....");
        }, 1500); 
    });
};


const runAllFetches = async () => {
    try {
        const results = await Promise.all([
            fetchData1(),
            fetchData2(),
            fetchData3(),
        ]);
        console.log(results); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

runAllFetches();
