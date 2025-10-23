import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const newsletterSubscriptions = sqliteTable('newsletter_subscriptions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  subscribedAt: text('subscribed_at').notNull(),
});

export const contactSubmissions = sqliteTable('contact_submissions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  subject: text('subject').notNull(),
  message: text('message').notNull(),
  submittedAt: text('submitted_at').notNull(),
});