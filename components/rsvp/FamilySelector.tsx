import { FamilyMember } from "@/types/rsvp";

type FamilySelectorProps = {
  familyMembers: FamilyMember[];
  attendingCount: number;
  onToggle: (index: number, attending: boolean) => void;
};

export function FamilySelector({
  familyMembers,
  attendingCount,
  onToggle,
}: FamilySelectorProps) {
  return (
    <div className="soft-border" style={{ borderRadius: 24, background: "white", padding: 24 }}>
      <h3 style={{ fontSize: 28 }}>Quem vai comparecer?</h3>
      <p style={{ marginTop: 8, color: "#5f5651" }}>
        Selecione abaixo as pessoas da família.
      </p>

      <div style={{ marginTop: 24, display: "grid", gap: 16 }}>
        {familyMembers.map((member, index) => (
          <div
            key={member.name}
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
              <p style={{ fontSize: 18, fontWeight: 600 }}>{member.name}</p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  type="button"
                  onClick={() => onToggle(index, true)}
                  style={{
                    borderRadius: 999,
                    padding: "10px 16px",
                    border: "none",
                    cursor: "pointer",
                    background: member.attending ? "black" : "#f3f4f6",
                    color: member.attending ? "white" : "#444",
                  }}
                >
                  Vai comparecer
                </button>

                <button
                  type="button"
                  onClick={() => onToggle(index, false)}
                  style={{
                    borderRadius: 999,
                    padding: "10px 16px",
                    border: "none",
                    cursor: "pointer",
                    background: !member.attending ? "black" : "#f3f4f6",
                    color: !member.attending ? "white" : "#444",
                  }}
                >
                  Não vai comparecer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 18, fontSize: 14, color: "#5f5651" }}>
        Total confirmado: <strong>{attendingCount}</strong>
      </p>
    </div>
  );
}