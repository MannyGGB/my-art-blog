// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkMdxImages from "remark-mdx-images";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    img_url: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    },
    slug: { type: "string", resolve: (post) => post._raw.flattenedPath }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    //@ts-ignore
    remarkPlugins: [remarkMdxImages],
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        jpg: "dataurl"
      };
      return options;
    }
  }
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-BM2SUUNI.mjs.map
