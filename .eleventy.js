const moment = require("moment");

moment.locale("en");

module.exports = function(eleventyConfig) {
  setupFilters(eleventyConfig);
  setupCss(eleventyConfig);
  setupImages(eleventyConfig);
  eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));

  return {
    passthroughFileCopy: true,
  };
};

function setupFilters(eleventyConfig) {
  eleventyConfig.addFilter("dateIso", (date) => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", (date) => {
    return moment(date)
      .utc()
      .format("LL"); // E.g. May 31, 2019
  });

  global.filters = eleventyConfig.javascriptFunctions; // magic happens here
  eleventyConfig.setPugOptions({
    // and here
    globals: ["filters"],
  });
}

function setupCss(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
}

function setupImages(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
}

function extractExcerpt(article) {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [
    { start: "<!-- e -->", end: "<!-- /e -->" },
    { start: "<p>", end: "</p>" },
  ];

  separatorsList.some((separators) => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.indexOf(separators.end);

    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content
        .substring(startPosition + separators.start.length, endPosition)
        .trim();
      return true; // Exit out of array loop on first match
    }
  });

  return excerpt;
}
