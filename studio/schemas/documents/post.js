const supportedLanguages = [
  { id: "fr", title: "Français", isDefault: true },
  { id: "en", title: "English" },
];

const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export default {
  name: "post",
  type: "document",
  title: "Articles",
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: `title.${baseLanguage.id}`,
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "excerpt",
      type: "localeBody",
      title: "Excerpt",
      description:
        "This ends up on summary pages, on Google, when people share your post in social media.",
    },
    {
      name: "authors",
      title: "Authors",
      type: "array",
      of: [
        {
          type: "authorReference",
        },
      ],
    },
    {
      title: "Cote",
      name: "cote",
      type: "string",
      options: {
        list: [
          { title: "Gauche", value: "gauche" },
          { title: "Droite", value: "droite" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
