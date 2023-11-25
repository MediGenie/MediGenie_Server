module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          // baseUrl: env("CDN_URL"),
          // rootPath: env("CDN_ROOT_PATH"),
          localServer: {},
          s3Options: {
            sizeLimit: 500 * 1024 * 1024, // 50 MB
            accessKeyId: env("AWS_ACCESS_KEYID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
            region: env("AWS_REGION", "ap-northeast-2"),
            params: {
              // ACL: env("AWS_ACL", "public-read"),
              // signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
              Bucket: env("AWS_BUCKET"),
            },
          },
        },
        breakpoints: {
          xlarge: 192000,
          // large: 1000,
          // medium: 750,
          // small: 500,
          // xsmall: 64,
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    documentation: {
      enabled: true,
      config: {
        openapi: "3.0.0",
        info: {
          version: "1.0.0",
          title: "Medigenie API 문서",
          description: "",
          termsOfService: "YOUR_TERMS_OF_SERVICE_URL",
          // contact: {
          //   name: "TEAM",
          //   email: "contact-email@something.io",
          //   url: "mywebsite.io",
          // },
          // license: {
          //   name: "Apache 2.0",
          //   url: "https://www.apache.org/licenses/LICENSE-2.0.html",
          // },
        },
        "x-strapi-config": {
          // Leave empty to ignore plugins during generation
          plugins: ["upload", "users-permissions"],
          path: "/documentation",
        },
        servers: [
          {
            url: "https://api.aiplaza.kr/api",
            description: "Development server",
          },
          {
            url: "http://localhost:1337/api",
            description: "Development server",
          },
        ],
        security: [{ bearerAuth: [] }],
        externalDocs: {
          description: "Find out more",
          url: "https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html",
        },
      },
    },
  };
};
