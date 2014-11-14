/**
 * Created by Travis on 11/13/2014.
 */

import tsUnit = require('../tsUnit/tsUnit.External.Packager/content/Scripts/tsUnit/tsUnit');

module CalcTest {
    class TryATest extends tsUnit.TestClass {
        test() {
            this.areIdentical(4, 4);
        }
    }
}
var test = new tsUnit.Test(CalcTest);

var result = test.run();

var overallOutcome = (result.errors.length === 0) ? 'Test Passed' : 'Test Failed';


console.log(overallOutcome);

