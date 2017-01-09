xdescribe('multiline-multiply.spec.js', function () {
    describe('Verify positive test cases', function () {
        it ('Input 1 2 into text area, and click multiply; Should display 2', function () {});
        it('Input 1 2 3 into text area, and click multiply; Should display 6', function () {});
        it('Input maximum number of inputs into the text area, and click multiply; Should display the correct value', function () {});
        it('Input 0 1 2 into text area, and click multiply; Should display 0', function () {});
        it('Input -1 1 2 into text area, and click multiply; Should display -2', function () {});
        it('input 1.5 2 3 into text area, and click multiply; Should display 9', function () {});
    });

    describe('Verify negative test cases', function () {
        it('Input 3 into text area, and click multiply; Should display an error about needing more than one number', function () {});
        it('Input T 3 into text area, and click multiply; Should display an error about only numerals being valid characters', function () {});
        it('Input T into text area, and click multiply; Should display an error about only numerals being valid characters, not the error about needing more than one number', function () {});
        it('Input ! @ # $ % ^ & * ? / into text area, and click multiply; Should display an error about only numerals being valid characters', function () {});
    });

});