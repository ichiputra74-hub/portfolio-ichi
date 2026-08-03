import { defineField, defineType } from 'sanity'

export const contactSchema = defineType({
  name: 'contact',
  title: 'Contact Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Resmi',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Nomor WhatsApp (format internasional, e.g. 6281234567890)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whatsappMessage',
      title: 'Default Text Message WhatsApp',
      type: 'string',
      initialValue: 'Halo, saya tertarik bekerjasama untuk project profesional.',
    }),
    defineField({
      name: 'location',
      title: 'Alamat Studio / Kota',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform (e.g. Instagram, Vimeo)', type: 'string' },
            { name: 'url', title: 'URL Link', type: 'url' },
          ],
        },
      ],
    }),
  ],
})
