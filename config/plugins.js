module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_https://api.vercel.com/v1/integrations/deploy/prj_9tv2UOESM9C1H4wa557UaMJx6BYT/HSciLpL3ug",
      apiToken: "TZMyjvj6qdmHMbmhaznvIbb6",
      appFilter: "strapi",
      teamFilter: '',
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});