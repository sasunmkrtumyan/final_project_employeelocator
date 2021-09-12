import { storage } from "../../helpers/libs/firebase.libs";

export default function UploadCV({ onChange, value }) {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    onChange(await fileRef.getDownloadURL());
  };

  return (
    <div className="search-border">
      <h2 className="heading-text">Upload CV</h2>
      <span>{value && "uploaded"}</span>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
