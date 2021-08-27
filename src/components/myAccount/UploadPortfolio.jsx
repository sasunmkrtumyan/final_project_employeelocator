import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";

export default function UploadPortfolio() {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div className="search-border">
      <h2 className="heading-text">Upload portfolio link</h2>
      <button className="plus-button" type="button" onClick={() => handleAdd()}>
        <PlusOutlined />
      </button>

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              className="inp"
              type="text"
              placeholder="link expected"
              value={field.value || ""}
              onChange={(e) => handleChange(idx, e)}
            />
            <button
              className="plus-button"
              type="button"
              onClick={() => handleRemove(idx)}
            >
              <DeleteOutlined />
            </button>
          </div>
        );
      })}
    </div>
  );
}
