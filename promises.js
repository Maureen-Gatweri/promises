//question1
//Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.


async function sendGreeting(greeting, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(greeting);
}

sendGreeting("Wake up and study", 2000);


//question2
//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.


const users = [1, 2, 3, 4, 5];

async function getUserid() {
  for (const id of users) {
    try {
      const userData = await userData(id);
      console.log(userData);
    } catch (error) {
      console.log(`The following users cannot be found ${id}: ${error}`);
    }
  }
}

getUserid();


//question3

//You have an asynchronous function performTask() that returns a Promise. 
//The Promise resolves if the task is successful and rejects if there's an error. 
//Write a function that calls performTask() and logs a custom success message 
//if the task is successful, and a custom error message if there's an error.

const performTask = []
async function completeTask() {
    try {
      await performTask();
      console.log("The task was successful!");
    } catch (error) {
      console.log("Task has failed:", error);
    }
  }
  
  completeTask();




  //question4
  
//Write a function unstableTask that:

//1.Accepts a taskName and failureProbability (a number between 0 and 1).
//2. Returns a Promise that:
//Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
//Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
//Write another function executeWithRetry that:

//Accepts a taskName, retries, and failureProbability.
//Uses a retry mechanism to attempt the unstableTask up to retries times.
//Logs whether the task succeeded or failed after all attempts.



  
  function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
      const random = Math.random();
      if (random > failureProbability) {
        resolve(`Task '${taskName}' succeeded!`);
      } else {
        reject(`Task '${taskName}' failed!`);
      }
    });
  }
  
  async function executeWithRetry(taskName, retries, failureProbability) {
    let attempt = 1;
    while (attempt <= retries) {
      try {
        const result = await unstableTask(taskName, failureProbability);
        console.log(result);
        return; 
      } catch (error) {
        console.log(`Attempt ${attempt} failed: ${error}`);
        attempt++;
      }
    }
    console.log(`Task '${task}' failed after ${retries} attempts.`);
  }
  
  executeWithRetry("The task that is not stable", 5, 0.3);
  
