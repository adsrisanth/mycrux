"use client";

import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { useState, useMemo, useCallback } from 'react';

const Cities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'state' | 'status'>('name');
  const [filterState, setFilterState] = useState<string>('all');


  // Comprehensive list of major Indian cities and towns
  const cities = useMemo(() => [
    // Major Metros
    { name: 'Mumbai', state: 'Maharashtra', status: 'coming-soon' },
    { name: 'Delhi', state: 'Delhi', status: 'coming-soon' },
    { name: 'Bangalore', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Hyderabad', state: 'Telangana', status: 'coming-soon' },
    { name: 'Chennai', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Kolkata', state: 'West Bengal', status: 'coming-soon' },
    
    // Tier 1 Cities
    { name: 'Pune', state: 'Maharashtra', status: 'coming-soon' },
    { name: 'Ahmedabad', state: 'Gujarat', status: 'coming-soon' },
    { name: 'Jaipur', state: 'Rajasthan', status: 'coming-soon' },
    { name: 'Surat', state: 'Gujarat', status: 'coming-soon' },
    { name: 'Lucknow', state: 'Uttar Pradesh', status: 'coming-soon' },
    { name: 'Kanpur', state: 'Uttar Pradesh', status: 'coming-soon' },
    { name: 'Nagpur', state: 'Maharashtra', status: 'coming-soon' },
    { name: 'Indore', state: 'Madhya Pradesh', status: 'coming-soon' },
    { name: 'Thane', state: 'Maharashtra', status: 'coming-soon' },
    { name: 'Bhopal', state: 'Madhya Pradesh', status: 'coming-soon' },
    
    // Tier 2 Cities
    { name: 'Visakhapatnam', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Pimpri-Chinchwad', state: 'Maharashtra', status: 'coming-soon' },
    { name: 'Patna', state: 'Bihar', status: 'coming-soon' },
    { name: 'Vadodara', state: 'Gujarat', status: 'coming-soon' },
    { name: 'Ghaziabad', state: 'Uttar Pradesh', status: 'coming-soon' },
    { name: 'Ludhiana', state: 'Punjab', status: 'coming-soon' },
    { name: 'Agra', state: 'Uttar Pradesh', status: 'coming-soon' },
    { name: 'Nashik', state: 'Maharashtra', status: 'coming-soon' },
    { name: 'Faridabad', state: 'Haryana', status: 'coming-soon' },
    { name: 'Meerut', state: 'Uttar Pradesh', status: 'coming-soon' },
    
    // South Indian Cities
    { name: 'Kochi', state: 'Kerala', status: 'coming-soon' },
    { name: 'Coimbatore', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Tiruchirappalli', state: 'Tamil Nadu', status: 'planned' },
    { name: 'Madurai', state: 'Tamil Nadu', status: 'planned' },
    { name: 'Mysore', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Mangalore', state: 'Karnataka', status: 'planned' },
    { name: 'Vijayawada', state: 'Andhra Pradesh', status: 'planned' },
    { name: 'Guntur', state: 'Andhra Pradesh', status: 'planned' },
    { name: 'Warangal', state: 'Telangana', status: 'planned' },
    { name: 'Nizamabad', state: 'Telangana', status: 'coming-soon' },
    
    // Additional South Indian Cities
    { name: 'Salem', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Tirunelveli', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Erode', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Vellore', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Tiruppur', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Dindigul', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Thanjavur', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Ranipet', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Sivakasi', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Karur', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Udhagamandalam', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Hosur', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Nagercoil', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Kanchipuram', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Cuddalore', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Kumbakonam', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Tiruvannamalai', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Pollachi', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Rajapalayam', state: 'Tamil Nadu', status: 'coming-soon' },
    { name: 'Sivaganga', state: 'Tamil Nadu', status: 'coming-soon' },
    
    // Additional Kerala Cities
    { name: 'Kottayam', state: 'Kerala', status: 'coming-soon' },
    { name: 'Palakkad', state: 'Kerala', status: 'coming-soon' },
    { name: 'Malappuram', state: 'Kerala', status: 'coming-soon' },
    { name: 'Kannur', state: 'Kerala', status: 'coming-soon' },
    { name: 'Kasaragod', state: 'Kerala', status: 'coming-soon' },
    { name: 'Alappuzha', state: 'Kerala', status: 'coming-soon' },
    { name: 'Pathanamthitta', state: 'Kerala', status: 'coming-soon' },
    { name: 'Idukki', state: 'Kerala', status: 'coming-soon' },
    { name: 'Wayanad', state: 'Kerala', status: 'coming-soon' },
    
    // Additional Karnataka Cities
    { name: 'Hubli', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Belgaum', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Gulbarga', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Bellary', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Bijapur', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Shimoga', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Tumkur', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Raichur', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Bidar', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Hospet', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Gadag', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Chitradurga', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Kolar', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Mandya', state: 'Karnataka', status: 'coming-soon' },
    { name: 'Hassan', state: 'Karnataka', status: 'coming-soon' },
    
    // Additional Andhra Pradesh Cities
    { name: 'Nellore', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Kurnool', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Kadapa', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Anantapur', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Chittoor', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Tirupati', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Rajahmundry', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Eluru', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Ongole', state: 'Andhra Pradesh', status: 'coming-soon' },
    { name: 'Nandyal', state: 'Andhra Pradesh', status: 'coming-soon' },
    
    // Additional Telangana Cities
    { name: 'Karimnagar', state: 'Telangana', status: 'coming-soon' },
    { name: 'Ramagundam', state: 'Telangana', status: 'coming-soon' },
    { name: 'Mahbubnagar', state: 'Telangana', status: 'coming-soon' },
    { name: 'Nalgonda', state: 'Telangana', status: 'coming-soon' },
    { name: 'Adilabad', state: 'Telangana', status: 'coming-soon' },
    { name: 'Suryapet', state: 'Telangana', status: 'coming-soon' },
    { name: 'Miryalaguda', state: 'Telangana', status: 'coming-soon' },
    { name: 'Jagtial', state: 'Telangana', status: 'coming-soon' },
    { name: 'Mancherial', state: 'Telangana', status: 'coming-soon' },
    { name: 'Siddipet', state: 'Telangana', status: 'coming-soon' },
    
    // North Indian Cities
    { name: 'Chandigarh', state: 'Chandigarh', status: 'coming-soon' },
    { name: 'Amritsar', state: 'Punjab', status: 'planned' },
    { name: 'Jalandhar', state: 'Punjab', status: 'planned' },
    { name: 'Bathinda', state: 'Punjab', status: 'planned' },
    { name: 'Dehradun', state: 'Uttarakhand', status: 'planned' },
    { name: 'Haridwar', state: 'Uttarakhand', status: 'planned' },
    { name: 'Rohtak', state: 'Haryana', status: 'planned' },
    { name: 'Gurgaon', state: 'Haryana', status: 'coming-soon' },
    { name: 'Panipat', state: 'Haryana', status: 'planned' },
    { name: 'Karnal', state: 'Haryana', status: 'planned' },
    
    // East Indian Cities
    { name: 'Bhubaneswar', state: 'Odisha', status: 'planned' },
    { name: 'Cuttack', state: 'Odisha', status: 'planned' },
    { name: 'Rourkela', state: 'Odisha', status: 'planned' },
    { name: 'Brahmapur', state: 'Odisha', status: 'planned' },
    { name: 'Sambalpur', state: 'Odisha', status: 'planned' },
    { name: 'Guwahati', state: 'Assam', status: 'planned' },
    { name: 'Silchar', state: 'Assam', status: 'planned' },
    { name: 'Dibrugarh', state: 'Assam', status: 'planned' },
    { name: 'Jorhat', state: 'Assam', status: 'planned' },
    { name: 'Tezpur', state: 'Assam', status: 'planned' },
    
    // West Indian Cities
    { name: 'Rajkot', state: 'Gujarat', status: 'planned' },
    { name: 'Jamnagar', state: 'Gujarat', status: 'planned' },
    { name: 'Bhavnagar', state: 'Gujarat', status: 'planned' },
    { name: 'Gandhinagar', state: 'Gujarat', status: 'planned' },
    { name: 'Nadiad', state: 'Gujarat', status: 'planned' },
    { name: 'Kolhapur', state: 'Maharashtra', status: 'planned' },
    { name: 'Sangli', state: 'Maharashtra', status: 'planned' },
    { name: 'Solapur', state: 'Maharashtra', status: 'planned' },
    { name: 'Aurangabad', state: 'Maharashtra', status: 'planned' },
    { name: 'Amravati', state: 'Maharashtra', status: 'planned' },
    
    // Central Indian Cities
    { name: 'Gwalior', state: 'Madhya Pradesh', status: 'planned' },
    { name: 'Jabalpur', state: 'Madhya Pradesh', status: 'planned' },
    { name: 'Ujjain', state: 'Madhya Pradesh', status: 'planned' },
    { name: 'Sagar', state: 'Madhya Pradesh', status: 'planned' },
    { name: 'Dewas', state: 'Madhya Pradesh', status: 'planned' },
    { name: 'Satna', state: 'Madhya Pradesh', status: 'planned' },
    { name: 'Ratlam', state: 'Madhya Pradesh', status: 'planned' },
    { name: 'Rewa', state: 'Madhya Pradesh', status: 'planned' },
    { name: 'Murwara', state: 'Madhya Pradesh', status: 'planned' },
    { name: 'Singrauli', state: 'Madhya Pradesh', status: 'planned' },
    
    // Northeast Cities
    { name: 'Imphal', state: 'Manipur', status: 'planned' },
    { name: 'Aizawl', state: 'Mizoram', status: 'planned' },
    { name: 'Kohima', state: 'Nagaland', status: 'planned' },
    { name: 'Shillong', state: 'Meghalaya', status: 'planned' },
    { name: 'Agartala', state: 'Tripura', status: 'planned' },
    { name: 'Gangtok', state: 'Sikkim', status: 'planned' },
    { name: 'Itanagar', state: 'Arunachal Pradesh', status: 'planned' },
    
    // Union Territories
    { name: 'Puducherry', state: 'Puducherry', status: 'planned' },
    { name: 'Kavaratti', state: 'Lakshadweep', status: 'planned' },
    { name: 'Port Blair', state: 'Andaman and Nicobar Islands', status: 'planned' },
    { name: 'Daman', state: 'Daman and Diu', status: 'planned' },
    { name: 'Diu', state: 'Daman and Diu', status: 'planned' },
    { name: 'Silvassa', state: 'Dadra and Nagar Haveli', status: 'planned' },
    
    // Additional Major Cities
    { name: 'Varanasi', state: 'Uttar Pradesh', status: 'planned' },
    { name: 'Allahabad', state: 'Uttar Pradesh', status: 'planned' },
    { name: 'Bareilly', state: 'Uttar Pradesh', status: 'planned' },
    { name: 'Gorakhpur', state: 'Uttar Pradesh', status: 'planned' },
    { name: 'Moradabad', state: 'Uttar Pradesh', status: 'planned' },
    { name: 'Aligarh', state: 'Uttar Pradesh', status: 'planned' },
    { name: 'Saharanpur', state: 'Uttar Pradesh', status: 'planned' },
    { name: 'Noida', state: 'Uttar Pradesh', status: 'planned' },
    { name: 'Firozabad', state: 'Uttar Pradesh', status: 'planned' },
    { name: 'Jhansi', state: 'Uttar Pradesh', status: 'planned' },
    
    // Bihar Cities
    { name: 'Gaya', state: 'Bihar', status: 'planned' },
    { name: 'Bhagalpur', state: 'Bihar', status: 'planned' },
    { name: 'Muzaffarpur', state: 'Bihar', status: 'planned' },
    { name: 'Darbhanga', state: 'Bihar', status: 'planned' },
    { name: 'Purnia', state: 'Bihar', status: 'planned' },
    { name: 'Arrah', state: 'Bihar', status: 'planned' },
    { name: 'Begusarai', state: 'Bihar', status: 'planned' },
    { name: 'Katihar', state: 'Bihar', status: 'planned' },
    { name: 'Munger', state: 'Bihar', status: 'planned' },
    { name: 'Chapra', state: 'Bihar', status: 'planned' },
    
    // Rajasthan Cities
    { name: 'Jodhpur', state: 'Rajasthan', status: 'planned' },
    { name: 'Kota', state: 'Rajasthan', status: 'planned' },
    { name: 'Bikaner', state: 'Rajasthan', status: 'planned' },
    { name: 'Ajmer', state: 'Rajasthan', status: 'planned' },
    { name: 'Udaipur', state: 'Rajasthan', status: 'planned' },
    { name: 'Bharatpur', state: 'Rajasthan', status: 'planned' },
    { name: 'Alwar', state: 'Rajasthan', status: 'planned' },
    { name: 'Sikar', state: 'Rajasthan', status: 'planned' },
    { name: 'Pali', state: 'Rajasthan', status: 'planned' },
    { name: 'Sri Ganganagar', state: 'Rajasthan', status: 'planned' },
    
    // Additional Kerala Cities (Next Phase)
    { name: 'Thiruvananthapuram', state: 'Kerala', status: 'coming-soon' },
    { name: 'Kozhikode', state: 'Kerala', status: 'coming-soon' },
    { name: 'Thrissur', state: 'Kerala', status: 'coming-soon' },
    { name: 'Kollam', state: 'Kerala', status: 'coming-soon' },
    
    // Goa Cities (Coming Soon)
    { name: 'Goa', state: 'Goa', status: 'coming-soon' },
    { name: 'Panaji', state: 'Goa', status: 'coming-soon' },
    { name: 'Margao', state: 'Goa', status: 'coming-soon' },
    { name: 'Vasco da Gama', state: 'Goa', status: 'coming-soon' },
    { name: 'Mapusa', state: 'Goa', status: 'coming-soon' },
    { name: 'Ponda', state: 'Goa', status: 'coming-soon' },
    { name: 'Bicholim', state: 'Goa', status: 'coming-soon' },
    { name: 'Valpoi', state: 'Goa', status: 'coming-soon' },
    { name: 'Sanguem', state: 'Goa', status: 'coming-soon' },
    { name: 'Quepem', state: 'Goa', status: 'coming-soon' },

    // Additional Major Cities - Jammu & Kashmir
    { name: 'Srinagar', state: 'Jammu and Kashmir', status: 'planned' },
    { name: 'Jammu', state: 'Jammu and Kashmir', status: 'planned' },
    { name: 'Anantnag', state: 'Jammu and Kashmir', status: 'planned' },
    { name: 'Baramulla', state: 'Jammu and Kashmir', status: 'planned' },
    { name: 'Sopore', state: 'Jammu and Kashmir', status: 'planned' },
    { name: 'Kathua', state: 'Jammu and Kashmir', status: 'planned' },
    { name: 'Udhampur', state: 'Jammu and Kashmir', status: 'planned' },
    { name: 'Punch', state: 'Jammu and Kashmir', status: 'planned' },
    { name: 'Rajauri', state: 'Jammu and Kashmir', status: 'planned' },
    { name: 'Kupwara', state: 'Jammu and Kashmir', status: 'planned' },

    // Himachal Pradesh
    { name: 'Shimla', state: 'Himachal Pradesh', status: 'planned' },
    { name: 'Dharamshala', state: 'Himachal Pradesh', status: 'planned' },
    { name: 'Solan', state: 'Himachal Pradesh', status: 'planned' },
    { name: 'Mandi', state: 'Himachal Pradesh', status: 'planned' },
    { name: 'Palampur', state: 'Himachal Pradesh', status: 'planned' },
    { name: 'Kullu', state: 'Himachal Pradesh', status: 'planned' },
    { name: 'Manali', state: 'Himachal Pradesh', status: 'planned' },
    { name: 'Baddi', state: 'Himachal Pradesh', status: 'planned' },
    { name: 'Una', state: 'Himachal Pradesh', status: 'planned' },
    { name: 'Nahan', state: 'Himachal Pradesh', status: 'planned' },

    // Jharkhand
    { name: 'Ranchi', state: 'Jharkhand', status: 'planned' },
    { name: 'Jamshedpur', state: 'Jharkhand', status: 'planned' },
    { name: 'Dhanbad', state: 'Jharkhand', status: 'planned' },
    { name: 'Bokaro', state: 'Jharkhand', status: 'planned' },
    { name: 'Deoghar', state: 'Jharkhand', status: 'planned' },
    { name: 'Phusro', state: 'Jharkhand', status: 'planned' },
    { name: 'Hazaribagh', state: 'Jharkhand', status: 'planned' },
    { name: 'Giridih', state: 'Jharkhand', status: 'planned' },
    { name: 'Ramgarh', state: 'Jharkhand', status: 'planned' },
    { name: 'Medininagar', state: 'Jharkhand', status: 'planned' },

    // Chhattisgarh
    { name: 'Raipur', state: 'Chhattisgarh', status: 'planned' },
    { name: 'Bhilai', state: 'Chhattisgarh', status: 'planned' },
    { name: 'Bilaspur', state: 'Chhattisgarh', status: 'planned' },
    { name: 'Korba', state: 'Chhattisgarh', status: 'planned' },
    { name: 'Rajnandgaon', state: 'Chhattisgarh', status: 'planned' },
    { name: 'Raigarh', state: 'Chhattisgarh', status: 'planned' },
    { name: 'Jagdalpur', state: 'Chhattisgarh', status: 'planned' },
    { name: 'Ambikapur', state: 'Chhattisgarh', status: 'planned' },
    { name: 'Mahasamund', state: 'Chhattisgarh', status: 'planned' },
    { name: 'Durg', state: 'Chhattisgarh', status: 'planned' },

    // Additional West Bengal Cities
    { name: 'Howrah', state: 'West Bengal', status: 'planned' },
    { name: 'Durgapur', state: 'West Bengal', status: 'planned' },
    { name: 'Asansol', state: 'West Bengal', status: 'planned' },
    { name: 'Siliguri', state: 'West Bengal', status: 'planned' },
    { name: 'Malda', state: 'West Bengal', status: 'planned' },
    { name: 'Baharampur', state: 'West Bengal', status: 'planned' },
    { name: 'Habra', state: 'West Bengal', status: 'planned' },
    { name: 'Kharagpur', state: 'West Bengal', status: 'planned' },
    { name: 'Shantipur', state: 'West Bengal', status: 'planned' },
    { name: 'Dankuni', state: 'West Bengal', status: 'planned' },

    // Additional Punjab Cities
    { name: 'Patiala', state: 'Punjab', status: 'planned' },
    { name: 'Mohali', state: 'Punjab', status: 'planned' },
    { name: 'Firozpur', state: 'Punjab', status: 'planned' },
    { name: 'Batala', state: 'Punjab', status: 'planned' },
    { name: 'Pathankot', state: 'Punjab', status: 'planned' },
    { name: 'Moga', state: 'Punjab', status: 'planned' },
    { name: 'Abohar', state: 'Punjab', status: 'planned' },
    { name: 'Malerkotla', state: 'Punjab', status: 'planned' },
    { name: 'Khanna', state: 'Punjab', status: 'planned' },
    { name: 'Phagwara', state: 'Punjab', status: 'planned' },

    // Additional Haryana Cities
    { name: 'Hisar', state: 'Haryana', status: 'planned' },
    { name: 'Ambala', state: 'Haryana', status: 'planned' },
    { name: 'Yamunanagar', state: 'Haryana', status: 'planned' },
    { name: 'Sonipat', state: 'Haryana', status: 'planned' },
    { name: 'Panchkula', state: 'Haryana', status: 'planned' },
    { name: 'Bhiwani', state: 'Haryana', status: 'planned' },
    { name: 'Sirsa', state: 'Haryana', status: 'planned' },
    { name: 'Bahadurgarh', state: 'Haryana', status: 'planned' },
    { name: 'Jind', state: 'Haryana', status: 'planned' },
    { name: 'Thanesar', state: 'Haryana', status: 'planned' },

    // Additional Uttarakhand Cities
    { name: 'Rudrapur', state: 'Uttarakhand', status: 'planned' },
    { name: 'Kashipur', state: 'Uttarakhand', status: 'planned' },
    { name: 'Haldwani', state: 'Uttarakhand', status: 'planned' },
    { name: 'Rishikesh', state: 'Uttarakhand', status: 'planned' },
    { name: 'Roorkee', state: 'Uttarakhand', status: 'planned' },
    { name: 'Ramnagar', state: 'Uttarakhand', status: 'planned' },
    { name: 'Pithoragarh', state: 'Uttarakhand', status: 'planned' },
    { name: 'Manglaur', state: 'Uttarakhand', status: 'planned' },
    { name: 'Kotdwar', state: 'Uttarakhand', status: 'planned' },
    { name: 'Kichha', state: 'Uttarakhand', status: 'planned' }
  ], []); // Empty dependency array since cities list is static

  // Get unique states for filter dropdown
  const states = useMemo(() => {
    const uniqueStates = [...new Set(cities.map(city => city.state))].sort();
    return uniqueStates;
  }, [cities]);

  // Filter and sort cities
  const filteredCities = useMemo(() => {
    let filtered = cities;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(city => 
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
    }
    
    // Filter by state
    if (filterState !== 'all') {
      filtered = filtered.filter(city => city.state === filterState);
    }
    
    // Sort cities
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'state') {
        return a.state.localeCompare(b.state) || a.name.localeCompare(b.name);
      } else if (sortBy === 'status') {
        // Sort by status priority: coming-soon > planned
        const statusOrder = { 'coming-soon': 0, 'planned': 1 };
        const aOrder = statusOrder[a.status as keyof typeof statusOrder] ?? 999;
        const bOrder = statusOrder[b.status as keyof typeof statusOrder] ?? 999;
        const statusDiff = aOrder - bOrder;
        if (statusDiff !== 0) return statusDiff;
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
    
    return filtered;
  }, [searchTerm, filterState, sortBy, cities]);

  // Get status text and color (monochrome only)
  const getStatusInfo = useCallback((status: string) => {
    switch (status) {
      case 'coming-soon':
        return { text: 'Coming Soon', color: 'bg-gray-600' };
      case 'planned':
        return { text: 'Planned', color: 'bg-gray-400' };
      default:
        return { text: 'Coming Soon', color: 'bg-gray-600' };
    }
  }, []);

  // Handle search with debouncing
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  // Handle sort change
  const handleSortChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as 'name' | 'state' | 'status');
  }, []);

  // Handle state filter change
  const handleStateFilterChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterState(e.target.value);
  }, []);



  return (
    <div className="bg-white">
      <Navigation currentPage="cities" />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Delivery Cities
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                Check if we deliver to your city. We're expanding to 500+ cities across India.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="bg-white text-black px-4 py-2 rounded-full">500+ Cities</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Pan India</div>
                <div className="bg-white text-black px-4 py-2 rounded-full">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-6">Find Your City</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Search for your city to check our delivery status. We're working hard to bring premium shopping to every corner of India.
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search your city..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                  aria-label="Search for cities"
                  maxLength={50}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Filter and Sort Controls */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    aria-label="Sort cities by"
                  >
                    <option value="name">City Name (A-Z)</option>
                    <option value="state">State</option>
                    <option value="status">Status</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">Filter by state:</label>
                  <select
                    value={filterState}
                    onChange={handleStateFilterChange}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    aria-label="Filter cities by state"
                  >
                    <option value="all">All States</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>



          {/* Status Legend */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Coming Soon</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-600">Planned</span>
            </div>
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCities.map((city, index) => {
              const statusInfo = getStatusInfo(city.status);
              return (
              <div
                key={`${city.name}-${index}`}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-black text-lg">{city.name}</h3>
                    <div className={`w-3 h-3 rounded-full ${statusInfo.color}`}></div>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{city.state}</p>
                  <p className="text-xs text-gray-500">{statusInfo.text}</p>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredCities.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No cities found</h3>
              <p className="text-gray-500">Try searching with a different term or check back later as we add more cities.</p>
            </div>
          )}

          {/* Results Count */}
          {searchTerm && (
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Showing {filteredCities.length} of {cities.length} cities
              </p>
            </div>
          )}
        </div>



        {/* CTA Section */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-black mb-6">Don't see your city?</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                We're constantly expanding our delivery network. Request your city to be prioritized in our expansion plans.
              </p>
              <div className="flex justify-center">
                <a href="/contact" className="bg-black text-white font-semibold py-4 px-10 rounded-lg hover:bg-gray-800 transition-colors text-center text-lg shadow-lg hover:shadow-xl">
                  Request City
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer currentPage="cities" />
    </div>
  );
};

export default Cities;