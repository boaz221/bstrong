module.exports = {
    get
};

function get() {
    return Promise.resolve([
        {
            title: "bla",
            displayName: "Bla",
            link: "http://google.com/",
            previewImageName: "aodijvadocvjd.jpg"
        }
    ]);
}