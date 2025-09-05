import { Db, ObjectId } from 'mongodb';
import { connectDB } from '@/lib/db';
import { ContactFormData, ContactFormRequest, ContactStatus } from '@/lib/models/Contact';

export class ContactService {
  private db: Db | null = null;
  private readonly COLLECTION_NAME = 'contacts';

  private async getDb(): Promise<Db> {
    if (!this.db) {
      this.db = await connectDB();
    }
    return this.db;
  }

  async createContact(contactData: ContactFormRequest): Promise<{ id: string; success: boolean; message: string }> {
    try {
      const db = await this.getDb();
      const collection = db.collection(this.COLLECTION_NAME);

      // Validate required fields
      if (!contactData.firstName || !contactData.lastName || !contactData.email || !contactData.subject || !contactData.message) {
        return {
          id: '',
          success: false,
          message: 'All required fields must be provided'
        };
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contactData.email)) {
        return {
          id: '',
          success: false,
          message: 'Invalid email format'
        };
      }

      // Create contact document
      const contactDocument: Omit<ContactFormData, 'id'> = {
        ...contactData,
        createdAt: new Date(),
        status: 'new' as ContactStatus
      };

      const result = await collection.insertOne(contactDocument);

      if (result.insertedId) {
        return {
          id: result.insertedId.toString(),
          success: true,
          message: 'Contact form submitted successfully'
        };
      } else {
        return {
          id: '',
          success: false,
          message: 'Failed to save contact form'
        };
      }
    } catch (error) {
      console.error('Error creating contact:', error);
      return {
        id: '',
        success: false,
        message: 'Internal server error'
      };
    }
  }

  async getContactById(id: string): Promise<ContactFormData | null> {
    try {
      const db = await this.getDb();
      const collection = db.collection(this.COLLECTION_NAME);

      if (!ObjectId.isValid(id)) {
        return null;
      }

      const contact = await collection.findOne({ _id: new ObjectId(id) });
      
      if (contact) {
        return {
          id: contact._id.toString(),
          firstName: contact.firstName,
          lastName: contact.lastName,
          email: contact.email,
          subject: contact.subject,
          message: contact.message,
          createdAt: contact.createdAt,
          status: contact.status
        };
      }

      return null;
    } catch (error) {
      console.error('Error getting contact by ID:', error);
      return null;
    }
  }

  async getAllContacts(limit: number = 50, skip: number = 0): Promise<ContactFormData[]> {
    try {
      const db = await this.getDb();
      const collection = db.collection(this.COLLECTION_NAME);

      const contacts = await collection
        .find({})
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(skip)
        .toArray();

      return contacts.map(contact => ({
        id: contact._id.toString(),
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        createdAt: contact.createdAt,
        status: contact.status
      }));
    } catch (error) {
      console.error('Error getting all contacts:', error);
      return [];
    }
  }

  async updateContactStatus(id: string, status: ContactStatus): Promise<boolean> {
    try {
      const db = await this.getDb();
      const collection = db.collection(this.COLLECTION_NAME);

      if (!ObjectId.isValid(id)) {
        return false;
      }

      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { status } }
      );

      return result.modifiedCount > 0;
    } catch (error) {
      console.error('Error updating contact status:', error);
      return false;
    }
  }

  async getContactsByStatus(status: ContactStatus): Promise<ContactFormData[]> {
    try {
      const db = await this.getDb();
      const collection = db.collection(this.COLLECTION_NAME);

      const contacts = await collection
        .find({ status })
        .sort({ createdAt: -1 })
        .toArray();

      return contacts.map(contact => ({
        id: contact._id.toString(),
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        subject: contact.subject,
        message: contact.message,
        createdAt: contact.createdAt,
        status: contact.status
      }));
    } catch (error) {
      console.error('Error getting contacts by status:', error);
      return [];
    }
  }
}
