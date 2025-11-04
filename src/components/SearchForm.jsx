import { useState } from "react";

function SearchForm({ onSearch }) {
    const [sid, setSid] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sid.trim() === "") {
            alert("Vui lòng nhập mã số sinh viên!");
            return;
        }

        onSearch(sid);
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <input type="text" placeholder="Nhập MSSV" value={sid} onChange={(e) => setSid(e.target.value)} style={{ padding: 8, width: 250 }} />
            <button
                type="submit"
                style={{
                    marginLeft: 10,
                    padding: "8px 16px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                }} >
                Tra cứu
            </button>
        </form>
    )
}

export default SearchForm;