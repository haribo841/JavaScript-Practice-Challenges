function hello() {
    return "hello world";
}
import * as Test from '../testHelper.js';
Test.assertEquals(hello(), "hello world", "Did you *return* the result?");