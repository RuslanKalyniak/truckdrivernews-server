// module.exports = ({env}) => ({
//   upload: {
//     config: {
//       provider: "strapi-provider-upload-do",
//       providerOptions: {
//         key: env('DO_SPACE_ACCESS_KEY'),
//         secret: env('DO_SPACE_SECRET_KEY'),
//         endpoint: env('DO_SPACE_ENDPOINT'),
//         space: env('DO_SPACE_BUCKET')
//       }
//     },
//   },
// })

// module.exports = ({ env }) => ({
//   upload: {
//     config: {
//       provider: "strapi-provider-upload-do",
//       providerOptions: {
//         key: process.env.DO_SPACE_ACCESS_KEY,
//         secret: process.env.DO_SPACE_SECRET_KEY,
//         endpoint: process.env.DO_SPACE_ENDPOINT,
//         space: process.env.DO_SPACE_BUCKET,
//         // directory: "media", // optional
//       },
//     },
//   },
// });


module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: "DO00R9GC83UCEVGF9QWC",
        secret: process.env.DO_SPACE_SECRET_KEY,
        endpoint: "truckdrivernews-space",
        space: process.env.DO_SPACE_BUCKET,
        // directory: "media", // optional
      },
    },
  },
});
