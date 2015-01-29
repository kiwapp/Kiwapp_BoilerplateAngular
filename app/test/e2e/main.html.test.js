describe('main', function() {

    it('should load the page', function() {
        browser.get('http://localhost:8080/build');
        browser.getTitle().then(function(title) {
            expect(title).toBe('<%%=displayName%>');
        });
    });
});
