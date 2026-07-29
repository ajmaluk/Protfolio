/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ajmal.uthakkan.in",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://ajmal.uthakkan.in/sitemap.xml",
    ],
  },
  exclude: [],
  outDir: "public",
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority mapping
    const priorityMap = {
      "/": 1.0,
      "/about": 0.9,
      "/projects": 0.9,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorityMap[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};