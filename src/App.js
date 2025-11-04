import { useState, useEffect } from "react";
import sinhvien from "./data/sinhvien.json";
import hocphan from "./data/hocphan.json";
import ketqua from "./data/ketqua.json";
import SearchForm from "./components/SearchForm";
import ResultTable from "./components/ResultTable";
import LoadingIndicator from "./components/LoadingIndicator";

function convertToLetter(score) {
  if (score >= 9.0) return "A+";
  if (score >= 8.5) return "A";
  if (score >= 8.0) return "B+";
  if (score >= 7.0) return "B";
  if (score >= 6.5) return "C+";
  if (score >= 5.5) return "C";
  if (score >= 5.0) return "D+";
  if (score >= 4.0) return "D";
  return "F";
}

export default function App() {
  const [studentId, setStudentId] = useState("");
  const [student, setStudent] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!studentId) return;

    setLoading(true);
    setError("");
    setStudent(null);
    setResults([]);

    const timer = setTimeout(() => {
      const sv = sinhvien.find((s) => s.sid === studentId);
      if (!sv) {
        setError("Không tìm thấy sinh viên!");
        setLoading(false);
        return;
      }

      setStudent(sv);

      const kq = ketqua.filter((k) => k.sid === studentId);
      if (kq.length === 0) {
        setError("Không có kết quả học tập.");
        setLoading(false);
        return;
      }

      const full = kq.map((r) => {
        const hp = hocphan.find((h) => h.cid === r.cid);
        return { ...r, ...hp, letter: convertToLetter(r.score) };
      });

      setResults(full);
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [studentId]);

  const handleSearch = (sid) => {
    if (!sid.trim()) {
      setError("Vui lòng nhập mã sinh viên!");
      return;
    }
    setStudentId(sid.trim());
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Tra cứu kết quả học tập</h2>
      <SearchForm onSearch={handleSearch} />
      {loading && <LoadingIndicator />}
      {student && (
        <div style={{ marginTop: "15px" }}>
          <p><strong>Họ tên:</strong> {student.name}</p>
          <p><strong>MSSV:</strong> {student.sid}</p>
          <p><strong>Ngày sinh:</strong> {student.dob}</p>
        </div>
      )}
      {!loading && results.length > 0 && <ResultTable data={results} />}
      {!loading && error && results.length === 0 && <p>{error}</p>}
    </div>
  );
}
