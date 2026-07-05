export const properties = [
  {
    id: 'p1',
    title: 'Skyline Residence',
    price: 180000,
    deposit: 30000,
    location: 'Kikoni',
    university: 'Makerere University',
    gate: 'Main Gate',
    distance: 1.2,
    propertyType: 'Bedsitter',
    bedrooms: 1,
    bathrooms: 1,
    availableRooms: 2,
    amenities: ['WiFi', 'Water', 'Electricity', 'Security', 'Parking'],
    rating: 4.8,
    images: ['/images/property-1.jpg', '/images/property-2.jpg'],
    description: 'Modern student housing with reliable power, fast WiFi, and a quiet study lounge.',
    landlordId: 'l1',
    status: 'available',
  },
  {
    id: 'p2',
    title: 'Maple Terrace',
    price: 240000,
    deposit: 40000,
    location: 'Nakawa',
    university: 'Ndejje University',
    gate: 'North Gate',
    distance: 3.1,
    propertyType: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    availableRooms: 3,
    amenities: ['WiFi', 'Water', 'Electricity', 'Laundry', 'Kitchen'],
    rating: 4.6,
    images: ['/images/property-2.jpg', '/images/property-3.jpg'],
    description: 'Spacious apartment with furnished common area and secure access.',
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
  { uid: 'demo-student', role: 'student', name: 'Ada Thompson', email: 'ada@student.com', verified: true },
  { uid: 'l1', role: 'landlord', name: 'Joseph Muwonge', email: 'joseph@landlord.com', verified: true },
  { uid: 'admin', role: 'admin', name: 'Miriam Nansubuga', email: 'miriam@campusstay.com', verified: true },
];
