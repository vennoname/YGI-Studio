function dashboard() {
    window.location.href = "../dashboard/indexdash.html";
}
function order() {
    window.location.href = "../Orders/indexorder.html";
}
function products() {
    window.location.href = "../Products/indexpro.html";
}
function customers() {
    window.location.href = "../Customers/indexcust.html";
}
function login() {
    window.location.href = "../login In/index.html";
}
function animation() {
    window.location.href = "../animation/index.html";
}
function video() {
    window.location.href = "../video/index.html";
}
function coding() {
    window.location.href = "../programming/index.html";
}
function teach() {
    window.location.href = "../teache/index.html";
}
// Function to implement live counters
function startLiveCounters() {
    const counters = [
        { id: "students", start: 500, increment: 2000 }, // Start at 500, increment by 5
        { id: "lecturers", start: 100, increment: 1000 }, // Start at 100, increment by 1
        { id: "experience", start: 20, increment: 10 }, // Start at 20, increment by 0.1
        { id: "awards", start: 10, increment: 0.50 } // Start at 10, increment by 0.05
    ];

    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        let currentValue = counter.start;

        // Set interval for live counting
        setInterval(() => {
            currentValue += counter.increment; // Increment the value
            element.innerText = currentValue.toFixed(0); // Display rounded value
        }, 1000); // Update every second
    });
}

// Start the counters when the page loads
document.addEventListener("DOMContentLoaded", startLiveCounters);

