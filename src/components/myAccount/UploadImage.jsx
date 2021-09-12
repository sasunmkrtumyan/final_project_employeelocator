import { storage } from "../../helpers/libs/firebase.libs";

export default function UploadImage({ onChange, value }) {
  // const [fileList, setFileList] = useState([]);

  const handleUploadImg = (e) => {
    const file = e.target.files[0];
    console.log({ file });
    if (!file) {
      return;
    }

    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then((e) => {
      e.ref.getDownloadURL().then((url) => onChange(url));
    });
  };

  return (
    <div className="search-border">
      <h2 className="heading-text">Upload you picture</h2>
      {value && <img className="imageDiv" src={value} alt="" />}
      <input
        type="file"
        // fileList={fileList}
        onChange={handleUploadImg}
      />
    </div>
  );
}
