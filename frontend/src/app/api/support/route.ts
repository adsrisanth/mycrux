import { NextRequest, NextResponse } from "next/server";
import { ContactService } from "@/lib/services/contactService";
import { ContactFormRequest } from "@/lib/models/Contact";

const contactService = new ContactService();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');
    const skip = parseInt(searchParams.get('skip') || '0');

    let contacts;
    if (status) {
      contacts = await contactService.getContactsByStatus(status as any);
    } else {
      contacts = await contactService.getAllContacts(limit, skip);
    }

    return NextResponse.json({
      success: true,
      data: contacts,
      count: contacts.length
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormRequest = await request.json();

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { success: false, message: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Validate subject enum
    const validSubjects = ['requesting-city', 'general', 'support', 'partnership', 'feedback', 'other'];
    if (!validSubjects.includes(body.subject)) {
      return NextResponse.json(
        { success: false, message: 'Invalid subject selection' },
        { status: 400 }
      );
    }

    const result = await contactService.createContact(body);

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: result.message,
          id: result.id
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}