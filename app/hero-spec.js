System.register(['./mock-heroes'], function(exports_1) {
    var mock_heroes_1;
    return {
        setters:[
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            }],
        execute: function() {
            describe('Hero', function () {
                it('has name lengthof 10', function () {
                    expect(mock_heroes_1.HEROES.length).toEqual(10);
                });
            });
        }
    }
});
//# sourceMappingURL=hero-spec.js.map