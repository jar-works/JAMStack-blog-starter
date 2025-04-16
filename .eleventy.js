const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    // Include these that are ignored by default
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");

    // Include the admin config.yml
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    return {
        dir: {
            input: "src", // Default: "views"
            output: "public" // Default: "_site"
        }
    }
}