module.exports = function(eleventyConfig) {

    // Include these that are ignored by default
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");

    return {
        dir: {
            input: "src", // Default: "views"
            output: "public" // Default: "_site"
        }
    }
}