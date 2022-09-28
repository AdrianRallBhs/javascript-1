const core = require("@actions/core");
const github = require("@actions/github")

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const lastGreeting = core.getInput("last-greeting");

async function run() {
    try {
        if (firstGreeting) {
            core.setOutput(("last one greeted", firstGreeting));
        } else if (secondGreeting) {
            core.setOutput(("last one greeted", secondGreeting));
        } else if (lastGreeting) {
            core.setOutput(("last one greeted", lastGreeting));
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
console.log(`The first one to be greeted was ${firstGreeting}!`);
console.log(`The second one to be greeted was ${secondGreeting}!`);
console.log(`The third one to be greeted was ${lastGreeting}!`);