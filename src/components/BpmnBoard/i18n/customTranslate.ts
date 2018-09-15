import translations from "./translateChinese";

export default function customTranslate(template, replacements) {
  replacements = replacements || {};

  // Translate
  template = translations[template] || template;

  // Replace
  return template.replace(/{([^}]+)}/g, (_, key) => {
    return replacements[key] || "{" + key + "}";
  });
}
