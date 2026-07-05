export const properties = [
  {
    id: 'p1',
    title: 'Greenview Student Hostel',
    price: 8500,
    deposit: 3000,
    location: 'Kahawa Sukari',
    university: 'Kenyatta University',
    gate: 'Main Gate',
    distance: 0.8,
    propertyType: 'Bedsitter',
    bedrooms: 1,
    bathrooms: 1,
    availableRooms: 5,
    amenities: ['WiFi', 'Water', 'Electricity', 'Security', 'Parking'],
    rating: 4.9,
    images: ['/images/property-1.svg', '/images/property-2.svg'],
    description:
      'Modern student hostel located five minutes from Kenyatta University Main Gate with 24-hour security, reliable water supply, fast WiFi and ample parking.',
    landlordId: 'l1',
    status: 'available',
  },
  {
    id: 'p2',
    title: 'Safari Heights Apartments',
    price: 12000,
    deposit: 5000,
    location: 'Ruiru',
    university: 'JKUAT',
    gate: 'Main Gate',
    distance: 1.5,
    propertyType: 'Apartment',
    bedrooms: 1,
    bathrooms: 1,
    availableRooms: 3,
    amenities: ['WiFi', 'Water', 'Electricity', 'Laundry', 'Kitchen'],
    rating: 4.7,
    images: ['/images/property-2.svg', '/images/property-3.svg'],
    description:
      'Affordable apartments near JKUAT offering spacious rooms, secure compound, laundry facilities and uninterrupted water supply.',
    landlordId: 'l2',
    status: 'available',
  },
];

export const bookings = [
  { id: 'b1', propertyId: 'p1', studentId: 'demo-student', status: 'approved', createdAt: '2026-07-01' },
];

export const reviews = [
  { id: 'r1', propertyId: 'p1', studentId: 'demo-student', rating: 5, comment: 'Excellent location and very clean.', anonymous: true },
];

export const users = [
  {
    uid: 'demo-student',
    role: 'student',
    name: 'Brian Mwangi',
    email: 'brian@student.com',
    verified: true,
  },
  {
    uid: 'l1',
    role: 'landlord',
    name: 'Grace Wanjiku',
    email: 'grace@landlord.com',
    verified: true,
  },
  {
    uid: 'admin',
    role: 'admin',
    name: 'CampusStay Admin',
    email: 'admin@campusstay.co.ke',
    verified: true,
  },
];