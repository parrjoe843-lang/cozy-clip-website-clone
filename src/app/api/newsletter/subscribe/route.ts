import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { newsletterSubscriptions } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validation: Email is required
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required', code: 'EMAIL_REQUIRED' },
        { status: 400 }
      );
    }

    // Sanitize email
    const sanitizedEmail = email.trim().toLowerCase();

    // Validation: Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format', code: 'INVALID_EMAIL_FORMAT' },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const existingSubscription = await db
      .select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, sanitizedEmail))
      .limit(1);

    if (existingSubscription.length > 0) {
      return NextResponse.json(
        { error: 'Email already subscribed', code: 'DUPLICATE_EMAIL' },
        { status: 409 }
      );
    }

    // Insert new subscription
    const newSubscription = await db
      .insert(newsletterSubscriptions)
      .values({
        email: sanitizedEmail,
        subscribedAt: new Date().toISOString(),
      })
      .returning();

    return NextResponse.json(
      {
        message: 'Successfully subscribed to newsletter',
        subscription: newSubscription[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}