import { Controller, Post, Get, Delete, Body, Param, HttpStatus, HttpException } from '@nestjs/common';
import { ContactService } from '../services/contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  /**
   * @route POST /api/v1/contacts
   * @desc Submit contact form
   * @body { firstName: string, lastName: string, email: string, subject: string, message: string }
   */
  @Post()
  async create(@Body() contactData: any) {
    try {
      const contact = await this.contactService.create(contactData);
      return {
        success: true,
        message: 'Contact form submitted successfully',
        data: contact
      };
    } catch (error) {
      throw new HttpException({
        success: false,
        message: error.message || 'Failed to create contact'
      }, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * @route GET /api/v1/contacts
   * @desc Get all contacts
   */
  @Get()
  async findAll() {
    try {
      const contacts = await this.contactService.findAll();
      return {
        success: true,
        data: contacts,
        count: contacts.length
      };
    } catch (error) {
      throw new HttpException({
        success: false,
        message: error.message || 'Failed to fetch contacts'
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * @route GET /api/v1/contacts/:id
   * @desc Get contact by ID
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const contact = await this.contactService.findById(parseInt(id));
      if (!contact) {
        throw new HttpException({
          success: false,
          message: 'Contact not found'
        }, HttpStatus.NOT_FOUND);
      }
      return {
        success: true,
        data: contact
      };
    } catch (error) {
      const status = error.message === 'Contact not found' ? HttpStatus.NOT_FOUND : HttpStatus.BAD_REQUEST;
      throw new HttpException({
        success: false,
        message: error.message || 'Failed to fetch contact'
      }, status);
    }
  }

  /**
   * @route DELETE /api/v1/contacts/:id
   * @desc Delete contact by ID
   */
  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.contactService.remove(parseInt(id));
      return {
        success: true,
        message: 'Contact deleted successfully'
      };
    } catch (error) {
      throw new HttpException({
        success: false,
        message: error.message || 'Failed to delete contact'
      }, HttpStatus.BAD_REQUEST);
    }
  }
}
