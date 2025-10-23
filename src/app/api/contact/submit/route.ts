import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { contactSubmissions } from '@/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { 
          error: 'Name is required and must be a non-empty string',
          code: 'INVALID_NAME'
        },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json(
        { 
          error: 'Email is required and must be a non-empty string',
          code: 'INVALID_EMAIL'
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim().toLowerCase();
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { 
          error: 'Email must be in valid format',
          code: 'INVALID_EMAIL_FORMAT'
        },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== 'string' || subject.trim() === '') {
      return NextResponse.json(
        { 
          error: 'Subject is required and must be a non-empty string',
          code: 'INVALID_SUBJECT'
        },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim() === '') {
      return NextResponse.json(
        { 
          error: 'Message is required and must be a non-empty string',
          code: 'INVALID_MESSAGE'
        },
        { status: 400 }
      );
    }

    // Prepare sanitized data
    const sanitizedData = {
      name: name.trim(),
      email: trimmedEmail,
      phone: phone && typeof phone === 'string' ? phone.trim() : null,
      subject: subject.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString()
    };

    // Insert into database
    const newSubmission = await db.insert(contactSubmissions)
      .values(sanitizedData)
      .returning();

    return NextResponse.json(
      {
        message: 'Contact submission received successfully',
        submission: newSubmission[0]
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