//Reject the promise with the simple string "It's not a dog!".
import { setTimeout } from "node:timers";
const promise = new Promise((resolve, reject) => {
    const animal = "cat";

    setTimeout(() => {
        if (animal === "dog") {
            resolve("It's a dog!");
        } else {
            reject("It's not a dog!");
        }
    }, 1000);
});
import { assertEquals } from "../testHelper.js";

assertEquals(promise instanceof Promise, true);

const rejection = await promise.then(
    () => {
        throw new Error("Expected the promise to reject.");
    },
    reason => reason
);

assertEquals(rejection, "It's not a dog!");