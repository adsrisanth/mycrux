import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  // Create contact
  async create(contactData: any): Promise<Contact> {
    const contact = this.contactRepository.create({
      firstName: contactData.firstName,
      lastName: contactData.lastName,
      email: contactData.email,
      subject: contactData.subject,
      message: contactData.message,
    });

    return await this.contactRepository.save(contact);
  }

  // Get all contacts
  async findAll(): Promise<Contact[]> {
    return await this.contactRepository.find({
      order: { createdAt: 'DESC' }
    });
  }

  // Get contact by ID
  async findById(id: number): Promise<Contact | null> {
    return await this.contactRepository.findOne({ where: { id } });
  }

  // Delete contact
  async remove(id: number): Promise<void> {
    await this.contactRepository.delete(id);
  }
}