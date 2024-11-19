import React from "react";

const DownloadButton = ({ fileUrl }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.substring(fileUrl.lastIndexOf("/") + 1);
    link.click();
  };

  return (
    <button
      className="submit_btn nav_port_btn rounded fw-bold p-0 m-0 d-flex align-items-center ps-3 pe-3 pt-0 pb-0 pt-lg-1 pb-lg-1"
      onClick={handleDownload}
    >
      <i className="bi bi-cloud-arrow-down-fill me-2 fs-4 p-0 m-0"></i>
      RESUME
    </button>
  );
};

export default DownloadButton;
