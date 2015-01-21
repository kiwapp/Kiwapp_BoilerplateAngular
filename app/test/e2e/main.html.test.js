describe('main', function() {
    after
    it('should load the page', function() {
        title = element(By.tagName("span")).getText()
        expect(title).toBe("Bienvenue sur le boilerplate pour les applications AngularJS");
    });
});
