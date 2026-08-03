import { defineField, defineType } from 'sanity'

export const aboutSchema = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline Utama',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Sub Headline',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Foto Profil Utama',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biografi Ringkas',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'story',
      title: 'Cerita Lengkap / Experience',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'cvFileUrl',
      title: 'URL Direct Download CV (Cloudinary / Storage)',
      type: 'url',
    }),
    defineField({
      name: 'stats',
      title: 'Statistik Utama',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label Stat', type: 'string' },
            { name: 'value', title: 'Nilai (e.g. 150+)', type: 'string' },
          ],
        },
      ],
    }),
  ],
})
