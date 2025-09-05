import { NextRequest, NextResponse } from "next/server";
import { ContactService } from "@/lib/services/contactService";
import { ContactStatus } from "@/lib/models/Contact";

const contactService = new ContactService();

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Contact ID is required' },
        { status: 400 }
      );
    }

    const contact = await contactService.getContactById(id);

    if (!contact) {
      return NextResponse.json(
        { success: false, message: 'Contact not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Contact ID is required' },
        { status: 400 }
      );
    }

    if (!body.status) {
      return NextResponse.json(
        { success: false, message: 'Status is required' },
        { status: 400 }
      );
    }

    const validStatuses: ContactStatus[] = ['new', 'in-progress', 'resolved', 'closed'];
    if (!validStatuses.includes(body.status)) {
      return NextResponse.json(
        { success: false, message: 'Invalid status' },
        { status: 400 }
      );
    }

    const success = await contactService.updateContactStatus(id, body.status);

    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Contact status updated successfully'
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to update contact status' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error updating contact:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
