export type AttendanceStatus = "pendente" | "confirmado" | "nao_vai";

export type FamilyMember = {
  id: string;
  name: string;
  status: AttendanceStatus;
};