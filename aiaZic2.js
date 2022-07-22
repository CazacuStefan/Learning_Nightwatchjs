module.exports = {
    'My second test case'(browser) {

        browser
            .url('https://open.spotify.com/search')
            .waitForElementVisible('.VgSbatGBB9XwTH2_dsxg')
    }
}