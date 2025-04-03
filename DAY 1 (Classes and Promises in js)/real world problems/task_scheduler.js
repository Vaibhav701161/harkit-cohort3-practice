/*
2. Implement a Task Scheduler using Promises
💡 Scenario: You are working on a project management tool that needs a function scheduleTask(task, delay). This function should:

Accept a task (callback function) and a delay (in ms).

Return a Promise that executes the task after the given delay.

Resolve when the task is completed.

🔧 Write a function that uses Promises to schedule tasks.
*/
// Task Scheduler using Promises
function scheduleTask(task, delay) {
    return new Promise((resolve, reject) => {
        if (typeof task !== 'function') {
            return reject(new Error('Task must be a function'));
        }
        setTimeout(() => {
            try {
                task();
                resolve('Task completed');
            } catch (error) {
                reject(error);
            }
        }, delay);
    });
}
