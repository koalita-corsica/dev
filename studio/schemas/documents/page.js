import { RiPagesFill } from "react-icons/ri";

const supportedLanguages = [
  { id: "fr", title: "Français", isDefault: true },
  { id: "en", title: "English" },
];

const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export default {
  name: "page",
  type: "document",
  title: "Page",
  icon: RiPagesFill,
  fields: [
    {
      name: "title",
      type: "localeString",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      readOnly: true,
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [{ type: "div" }],
    },
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
