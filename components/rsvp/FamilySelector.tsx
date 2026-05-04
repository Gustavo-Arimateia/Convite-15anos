import { AttendanceStatus, FamilyMember } from "@/types/rsvp";

type FamilySelectorProps = {
  familyMembers: FamilyMember[];
  attendingCount: number;
  notAttendingCount: number;
  pendingCount: number;
  onToggle: (memberId: string, status: AttendanceStatus) => void;
};

export function FamilySelector({
  familyMembers,
  attendingCount,
  notAttendingCount,
  pendingCount,
  onToggle,
}: FamilySelectorProps) {
  return (
    <div
      className="soft-border"
      style={{
        borderRadius: 24,
        background: "white",
        padding: 24,
      }}
    >
      <h3 style={{ fontSize: 28 }}>Quem vai comparecer?</h3>

      <p style={{ marginTop: 8, color: "#5f5651" }}>
        Confirme individualmente a presença de cada pessoa do convite.
      </p>

      <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
        {familyMembers.map((member) => {
          const isConfirmed = member.status === "confirmado";
          const isNotAttending = member.status === "nao_vai";

          return (
            <div
              key={member.id}
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: 20,
                padding: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div>
                  <p style={{ fontSize: 18, fontWeight: 600 }}>
                    {member.name}
                  </p>

                  {member.status === "pendente" && (
                    <p
                      style={{
                        marginTop: 4,
                        fontSize: 13,
                        color: "#9a6a00",
                      }}
                    >
                      Aguardando confirmação
                    </p>
                  )}

                  {member.status === "confirmado" && (
                    <p
                      style={{
                        marginTop: 4,
                        fontSize: 13,
                        color: "#166534",
                      }}
                    >
                      Presença confirmada
                    </p>
                  )}

                  {member.status === "nao_vai" && (
                    <p
                      style={{
                        marginTop: 4,
                        fontSize: 13,
                        color: "#991b1b",
                      }}
                    >
                      Não vai comparecer
                    </p>
                  )}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={() => onToggle(member.id, "confirmado")}
                    style={{
                      borderRadius: 999,
                      padding: "10px 16px",
                      border: "none",
                      cursor: "pointer",
                      background: isConfirmed ? "black" : "#f3f4f6",
                      color: isConfirmed ? "white" : "#444",
                    }}
                  >
                    Vai comparecer
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggle(member.id, "nao_vai")}
                    style={{
                      borderRadius: 999,
                      padding: "10px 16px",
                      border: "none",
                      cursor: "pointer",
                      background: isNotAttending ? "black" : "#f3f4f6",
                      color: isNotAttending ? "white" : "#444",
                    }}
                  >
                    Não vai comparecer
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 18, fontSize: 14, color: "#5f5651" }}>
        <p>
          Total confirmado: <strong>{attendingCount}</strong>
        </p>

        <p>
          Não vão comparecer: <strong>{notAttendingCount}</strong>
        </p>

        {pendingCount > 0 && (
          <p style={{ color: "#9a6a00" }}>
            Pendentes de resposta: <strong>{pendingCount}</strong>
          </p>
        )}
      </div>
    </div>
  );
}