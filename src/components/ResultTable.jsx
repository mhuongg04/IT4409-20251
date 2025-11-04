
function ResultTable({ data }) {
    return (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }} >
            <thead style={{ background: "#f0f0f0" }}>
                <tr>
                    <th>Mã học phần</th>
                    <th>Tên học phần</th>
                    <th>Số tín chỉ</th>
                    <th>Học kỳ</th>
                    <th>Điểm số</th>
                    <th>Điểm chữ</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <td>{row.cid}</td>
                        <td>{row.name}</td>
                        <td>{row.credits}</td>
                        <td>{row.term}</td>
                        <td>{row.score}</td>
                        <td>{row.letter}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ResultTable;