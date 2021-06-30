export default {
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "description",
      type: "localeBody",
      title: "Description",
    },
  ],
};
