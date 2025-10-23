CREATE TABLE `newsletter_subscriptions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`subscribed_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `newsletter_subscriptions_email_unique` ON `newsletter_subscriptions` (`email`);