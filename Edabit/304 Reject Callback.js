//Reject the promise with an Error whose message is "It's not a dog!".
//The original exercise requests a string; this version preserves the message and adds an error stack.
import { setTimeout } from "node:timers";
const promise = new Promise((_resolve, reject) => {
    setTimeout(() => {
        reject(new Error("It's not a dog!"));
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

assertEquals(rejection instanceof Error, true);
assertEquals(rejection.message, "It's not a dog!");
assertEquals(typeof rejection.stack, "string");
