// Sử dụng thư viện html2pdf để export CV thành PDF
// Bạn cần import html2pdf qua CDN nếu muốn chạy export PDF
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>

document.getElementById("downloadBtn").addEventListener("click", () => {
  const element = document.getElementById("cv");
  const opt = {
    margin: 0.5,
    filename: "CV_NguyenHaiMinh.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
});
