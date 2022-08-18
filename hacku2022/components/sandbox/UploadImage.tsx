import React from "react";

//cloudinary
export const UploadImage = () => {
  const [imageSrc, setImageSrc] = React.useState(); //画像のsrc
  const [uploadData, setUploadData] = React.useState();

  //ボタンが押されたとき
  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  //fileが入ってきた時
  var srcUrl = null;
  async function handleOnSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "my-uploads");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dhbnknlos/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
    console.log(data.secure_url);
    srcUrl = data.secure_url;
  }
  return (
    <div>
      <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
        <p>
          <input type="file" name="file">
            <img src={imageSrc}></img>
            {imageSrc && !uploadData && (
              <p>
                <button>Upload Files</button>
              </p>
            )}
            {uploadData && <p>{srcUrl}</p>}
          </input>
        </p>
      </form>
    </div>
  );
};
