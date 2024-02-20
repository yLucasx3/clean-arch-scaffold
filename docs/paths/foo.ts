export const fooPaths = {
  "/foo": {
    post: {
      summary: "Create a foo",
      description: "Create a foo",
      tags: ["Foo"],
      produces: ["application/json"],
      responses: {
        200: {
          description: "Successful operation",
        },
        400: {
          description: "Empty foo",
        },
      },
    },
  },
};
