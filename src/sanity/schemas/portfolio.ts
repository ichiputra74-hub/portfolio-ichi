import { defineField, defineType } from 'sanity'

export const portfolioSchema = defineType({
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Project',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampilan',
      type: 'number',
      description: 'Nomor urut prioritas (1 = paling awal)',
      initialValue: 1,
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Utama (Sanity / Cloudinary)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Foto',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Kumpulan foto pendukung resolusi tinggi',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Direct Video URL (Cloudinary / MP4 Direct)',
      type: 'url',
      description: 'Direct MP4 video URL dari Cloudinary atau host lainnya',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Link YouTube',
      type: 'url',
      description: 'Link video YouTube (e.g. https://www.youtube.com/watch?v=xxx)',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Tahun',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Lokasi',
      type: 'string',
    }),
    defineField({
      name: 'software',
      title: 'Software yang Digunakan',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags / Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Detail',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  orderings: [
    {
      title: 'Manual Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
