QUnit.modul("fizzbuzz", function () {
  QUnit.test("two numbersLétezik-e fizzbuzz?", function (assert) {
    assert.ok(fizzbuzz, "létezik-e a fizzbuzz?");
  });

  QUnit.test("függvény-e a fizzbuzz?", function (assert) {
    assert.ok(typeof fizzbuzz == "function", "függvény-e a fizzbuzz?");
  });

  QUnit.test("fizzbuzz(0)", function (assert) {
    assert.equal(fizzbuzz(0), "");
  });

  QUnit.test("fizzbuzzErtek(1)", function (assert) {
    assert.equal(fizzbuzzErtek(1), 1);
  });

  QUnit.test("fizzbuzzErtek(2)", function (assert) {
    assert.equal(fizzbuzzErtek(2), 2);
  });

  QUnit.test("fizzbuzzErtek(3)", function (assert) {
    assert.equal(fizzbuzzErtek(3), "fizz");
  });

  QUnit.test("fizzbuzzErtek() [1, 2, 4, 7, 8, 10, 11, 13, 14]", function (assert) {
    const nemOszthatoLista = [1, 2, 4, 7, 8, 10, 11, 13, 14];
    for (let index = 0; index < nemOszthatoLista.length; index++) {
      assert.equal(fizzbuzzErtek(nemOszthatoLista[index])),
        nemOszthatoLista[index];
    }
  });

  QUnit.test("fizzbuzzErtek() [3,6,9,12]", function (assert) {
    const nemOszthatoLista = [3, 6, 9, 12];
    for (let index = 0; index < nemOszthatoLista.length; index++) {
      assert.equal(fizzbuzzErtek(nemOszthatoLista[index])), "fizz";
    }
  });
});
