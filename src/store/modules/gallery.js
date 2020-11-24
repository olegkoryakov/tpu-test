import GalleryItemImage from '@/components/Gallery/img/gallery-item-1.jpg';

export default {
  state: {
    text: {
      ru: {
        slogan: 'Опыт, вековая история, научные разработки, открытия и личности',
      },
      en: {
        slogan: 'Experience, centuries-old history, scientific developments, discoveries and personalities',
      },
    },
    galleryItems: [
      {
        url: GalleryItemImage,
        alt: 'TPU',
      },
      {
        url: GalleryItemImage,
        alt: 'TPU',
      },
      {
        url: GalleryItemImage,
        alt: 'TPU',
      },
      {
        url: GalleryItemImage,
        alt: 'TPU',
      },
    ],
  },
  getters: {
    galleryItems: (state) => state.galleryItems,
    text: (state) => state.text,
  },
};
