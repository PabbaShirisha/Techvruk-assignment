import React from "react";

function UploadBox({ setImage }) {

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if(file){
      setImage({
        file,
        url: URL.createObjectURL(file)
      });
    }
  };

  return (
    <div className="upload-box">
      <input type="file" accept="image/png, image/jpg" onChange={handleUpload}/>
    </div>
  );
}

export default UploadBox;