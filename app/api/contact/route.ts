import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Contact } from '@/models/Contact';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10, { message: "DATA_PACKET_TOO_SMALL: Minimum 10 characters required." }).max(5000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate using zod
    const validatedData = contactSchema.parse(body);

    console.log('API: Connecting to DB...');
    await connectDB();
    console.log('API: Connected. Saving contact...');

    // Create and save contact
    const contact = new Contact(validatedData);
    await contact.save();
    console.log('API: Contact saved successfully.');

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
        data: contact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again.',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        count: contacts.length,
        data: contacts,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch contacts',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
