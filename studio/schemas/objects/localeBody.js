/* eslint-disable no-undef */

const supportedLanguages = [
  { id: "fr", title: "Français", isDefault: true },
  { id: "en", title: "English" },
];

const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export default {
  title: "Localized string",
  name: "localeBody",
  type: "object",
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "array",
    of: [{ type: "block" }],
  })),
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
};
