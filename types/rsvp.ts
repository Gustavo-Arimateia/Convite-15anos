export type FamilyMember = {
  name: string;
  attending: boolean;
};

export type RsvpPayload = {
  pin: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  notes: string;
  familyMembers: FamilyMember[];
};