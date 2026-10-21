
const FOLDERS = {
  "event-production": "Event Production",
  "integrated-marketing": "Integrated Marketing",
  "content-production": "Content Production",
  "digital-activation": "Digital Activation",
  "social-kol": "Social & KOL",
};

export const showcaseCategories = ["All Works", ...Object.values(FOLDERS)];

const modules = import.meta.glob(
  "../assets/showcase/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

function captionFrom(fileName) {
  const name = fileName
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  if (!name || /^\d+$/.test(name) || /^(img|dsc|dscf|photo|image|foto|screenshot|whatsapp)/i.test(name)) {
    return "";
  }
  return name.replace(/\b\w/g, (c) => c.toUpperCase());
}

export const showcasePhotos = Object.entries(modules)
  .map(([path, mod]) => {
    const parts = path.split("/");
    const file = parts[parts.length - 1];
    const folder = parts[parts.length - 2];
    return {
      id: path,
      src: mod.default,
      category: FOLDERS[folder],
      caption: captionFrom(file),
    };
  })
  .filter((p) => p.category) 
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));