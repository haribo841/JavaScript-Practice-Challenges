function hello() {
    return "hello world";
}
Test.assertEquals(hello(), "hello world", "Did you *return* the result?");
console.log(hello());